import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
        </div>
        <Routes>
          <Route exact path="/" Component={MovieList}/>
        </Routes>
      </Router>
  );
}

export default App;
