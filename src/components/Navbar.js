import React from "react";
import NetflixLogo from "./Netflix_logo.png";
// import '../index.css';

export default function Navbar(){
    return(
        <div className="nav">
            <img src={NetflixLogo} className="logo" />
            <div className="connect">
                <p>UNLIMITED TV SHOWS & MOVIES</p>
                <button className="join">JOIN NOW</button>
                <button className="signIn">SIGN IN</button>
            </div>
        </div>
    )
}