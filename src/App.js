
import React, { useRef } from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Footer from './Components/Footer';


function App() {
  const aboutUs = useRef();

  return (
    <div>
      <Router>
        <div className="app">
          <Header aboutUs={aboutUs}/>
        </div>
        <Routes>
          <Route exact path="/" Component={MovieList}/>
        </Routes>
      </Router>
    
     <Footer aboutUs={aboutUs}/>
     </div>
)

}

export default App;

