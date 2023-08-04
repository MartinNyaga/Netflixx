import React, { useState } from 'react';

const MovieSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=8613e44dd729f371ce69257fa7c24c0c&query=";

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      fetch(searchApi + searchTerm)
        .then((response) => response.json())
        .then((data) => {
          onSearch(data.results);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearchBar;
