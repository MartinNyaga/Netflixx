import React from "react";
import {Link} from "react-router-dom";
import header_logo from "../Assets/logo.png"
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
        </header>
    )
}
export  default Header