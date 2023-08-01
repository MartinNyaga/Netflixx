import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import BackGroundImage from "./Assets/home.jpg"

function App() {
  return (
      <container>
      <Router>
        <div className="app">
          <Header />
        </div>
        <Routes>
          <Route exact path="/" Component={MovieList}/>
        </Routes>
      </Router>
      </container>
  );
}

export default App;
