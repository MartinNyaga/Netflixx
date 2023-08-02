import React from "react";
import {Link} from "react-router-dom";
import header_logo from "../Assets/logo.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header=()=>{
    return(
        <header className="header">
            <Link to="/">
                <img className="header_logo"
                     src={header_logo} alt="APP_LOGO"
                />
            </Link>
            <nav className="header_nav">
                <Link to="movielist">Home</Link>
            </nav>
            <div className="Fonts">
          
<a href = "#https://facebook.com">
    <i className="fab fa-facebook">
        
        </i>
    </a>
    
    <a href = "#https://twitter.com">
        <i className="fab fa-twitter"></i>
    </a>
    
    <a href = "#https://instagram.com">
        <i className="fab fa-instagram"></i>
    </a>

</div>

        </header>
    );
}
export  default Header;


