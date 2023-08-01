import React, { useState, useEffect } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=8613e44dd729f371ce69257fa7c24c0c")
            .then(response => response.json())
            .then(data => {
                // Assuming the API response contains a property named "results" with the array of movies
                setMovies(data.results);
            })
            .catch((error) => console.log("Error fetching movies:", error));
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img
                        className="movie_poster"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h3 className="movie_title">{movie.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
