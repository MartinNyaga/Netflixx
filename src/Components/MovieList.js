import React, { useState, useEffect } from "react";
import axios from "axios";
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [isHovering, setIsHovering] = useState(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=8613e44dd729f371ce69257fa7c24c0c")
            .then(response => response.json())
            .then(data => {
                // Assuming the API response contains a property named "results" with the array of movies
                setMovies(data.results);
            })
            .catch((error) => console.log("Error fetching movies:", error));
    }, []);

    useEffect(() => {
        // Fetch movie details for each movie in the movies array
        const fetchMovieDetails = async () => {
            const promises = movies.map((movie) =>
                fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=8613e44dd729f371ce69257fa7c24c0c`)
                    .then(response => response.json())
            );

            const movieDetailsData = await Promise.all(promises);

            // Create a map of movie IDs to their details for easy access
            const detailsMap = movieDetailsData.reduce((acc, details) => {
                acc[details.id] = details;
                return acc;
            }, {});

            setMovieDetails(detailsMap);
        };

        fetchMovieDetails();
    }, [movies]);

    const handleMouseEnter = (movieId) => {
        setIsHovering(movieId);
    };

    const handleMouseLeave = () => {
        setIsHovering(null);
    };

    const handlePlayTrailer = async (movieId) => {
        const movie = movieDetails[movieId];
        if (!movie) return;

        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search`,
                {
                    params: {
                        part: "snippet",
                        q: `${movie.title} Official Trailer`,
                        type: "video",
                        maxResults: 1,
                        key: "AIzaSyCBSX8QFn-mQ4esEGATSclVD3ANnm7IVsc",
                    },
                }
            );

            const videoId = response.data.items[0]?.id?.videoId;
            if (videoId) {
                const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
                window.open(youtubeUrl, "_blank");
            }
        } catch (error) {
            console.log("Error fetching trailer:", error);
        }
    };
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div
                    className="movie"
                    key={movie.id}
                    onMouseEnter={() => handleMouseEnter(movie.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className="movie_poster"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="movie_details">
                        <h3 className="movie_title">{movie.title}</h3>
                        {isHovering === movie.id && (
                            <div>
                                <p className="movie_overview">{movieDetails[movie.id]?.overview}</p>
                                <button className="movie_button" onClick={() => handlePlayTrailer(movie.id)}>Play Trailer</button>
                            </div>
                        )}
                        <p className="movie_rating">Rating: {movieDetails[movie.id]?.vote_average }</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;