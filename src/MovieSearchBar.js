import React, { useState } from 'react';

const MovieSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
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
