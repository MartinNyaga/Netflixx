import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieSearchBar from './MovieSearchBar';
import MovieList from './Components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  // Handler for receiving search results
  const handleSearchResults = (results) => {
    setMovies(results);
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=8613e44dd729f371ce69257fa7c24c0c")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log("Error fetching movies:", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Netflixx work on going</h1>
          {/* Place the MovieSearchBar component here */}
          <MovieSearchBar onSearch={handleSearchResults} />
          <Switch>
            <Route exact path="/">
              {/* Pass movies as a prop to the MovieList component */}
              <MovieList movies={movies} />
            </Route>
            <Route path="/movie/:id">
            
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;