import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <Link to={`/movie/${movie.id}`}>
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <div className="movie_title">{movie.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
