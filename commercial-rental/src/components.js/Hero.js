import React from "react";
import img from "../images/traveltrailer.svg";
import "../styles/Hero.css";

export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-header">
                Find your RV rental
                </div>
                <p className="hero-p">
                Experience the outdoors with Sun Flo Rentalz
                </p>
                <div className="trailer-container">
                    <img className="temp-trailer" src= {img}/>
                </div>
            </div>
        </div>
    )
}