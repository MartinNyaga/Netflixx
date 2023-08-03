import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import MovieSearchBar from './MovieSearchBar';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [movies, setMovies] = useState([]);
  const aboutUs = useRef();

  // Handler for receiving search results
  const handleSearchResults = (results) => {
    setMovies(results);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=8613e44dd729f371ce69257fa7c24c0c")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => console.log("Error fetching movies:", error));
    };
  
    fetchData(); // Call the fetchData function
  }, []);
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header /> {/* Render the Header component */}
          <h1>Netflixx work on going</h1>
          {/* Place the MovieSearchBar component here */}
          <MovieSearchBar onSearch={handleSearchResults} />
          <Switch>
            <Route exact path="/">
              {/* Pass movies as a prop to the MovieList component */}
              <MovieList movies={movies} />
            </Route>
            <Route path="/about">
              {/* Render the AboutUs component */}
              <AboutUs />
            </Route>
          </Switch>
        </header>
        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
  );
  
}

export default App;
