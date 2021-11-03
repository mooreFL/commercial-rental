import React from "react";
import img from "../images/logo-removebg.png";
import "../styles/Hero.css";

export default function Hero() {
    return (
        <hero className="hero">
            <div className="container">
                <div className="hero-header">
                Find your RV rental
                </div>
                <p className="hero-p">
                Experience the outdoors with Sun Flo Rentalz.
                <br/>
                Serving Central Florida with premium vacation rentals.
                </p>
                <div className="trailer-container">
                    <img className="temp-trailer" src= {img}/>
                </div>
            </div>
        </hero>
    );
}