import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = ({ movies }) => {
    const [isHovering, setIsHovering] = useState(null);
    const [watchlist, setWatchlist] = useState([]);
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(storedWatchlist);
    }, []);

    const handleMouseEnter = (movieId) => {
        setIsHovering(movieId);
    };

    const handleMouseLeave = () => {
        setIsHovering(null);
    };

    const handlePlayTrailer = async (movieId) => {
        const movie = movies.find((m) => m.id === movieId);
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

    const handleAddToWatchlist = (movie) => {
        if (watchlist.some((m) => m.id === movie.id)) {
            setMessage(`${movie.title} is already in your watchlist.`);
        } else {
            const updatedWatchlist = [...watchlist, movie];
            setWatchlist(updatedWatchlist);
            localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
            setMessage(`${movie.title} has been added to your watchlist!`);
        }

        // Show the popup for 3 seconds
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div className="movie-list">
            {/* Popup notification */}
            {showPopup && <div className="popup-message">{message}</div>}

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
                                <p className="movie_overview">{movie.overview}</p>
                                <button
                                    className="movie_button"
                                    onClick={() => handlePlayTrailer(movie.id)}
                                >
                                    Play Trailer
                                </button>
                                <button
                                    className="movie_button"
                                    onClick={() => handleAddToWatchlist(movie)}
                                >
                                    Add to Watchlist
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
