import React, { useState, useEffect } from 'react';

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(storedWatchlist);
    }, []);

    const handleRemoveFromWatchlist = (movieId) => {
        const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
        setWatchlist(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    };

    return (
        <div className="watchlist-page">
            <h1>My Watchlist</h1>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                <div className="watchlist">
                    {watchlist.map((movie) => (
                        <div key={movie.id} className="watchlist-item">
                            <img
                                className="watchlist_poster"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div>
                                <h3>{movie.title}</h3>
                                <button
                                    className="remove_button"
                                    onClick={() => handleRemoveFromWatchlist(movie.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Watchlist;
