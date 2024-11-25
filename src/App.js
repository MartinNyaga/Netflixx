import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import MovieSearchBar from './MovieSearchBar';
import MovieList from './Components/MovieList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Watchlist from './Components/Watchlist';

function App() {
    const aboutUs = useRef();
    const [movies, setMovies] = useState([]);

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
                <Header aboutUs={aboutUs} />
                <MovieSearchBar onSearch={handleSearchResults} />
                <Switch>
    <Route exact path="/">
        <MovieList movies={movies} />
    </Route>
    <Route path="/mylist">
        <Watchlist />
    </Route>
</Switch>

                <Footer aboutUs={aboutUs} />
            </div>
        </Router>
    );
}

export default App;
