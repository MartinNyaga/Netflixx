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
            <div>
<a href = "facebook link">
    <i className="fab fa-facebook">
        <div/>
    </i>
</a>

<a href = "twitter link">
    <i className="fab fa-twitter"></i>
</a>

<a href = "instagram link">
    <i className="fab fa-instagram"></i>
</a>

</div>
        </header>
    )
}
export  default Header