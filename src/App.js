import React, { useState } from 'react';
import './App.css';
import MovieSearchBar from './MovieSearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflixx work on going</h1>
        <MovieSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
    </div>
  );
}

export default App;

