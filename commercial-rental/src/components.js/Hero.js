import React from "react";
import img from "../images/logo-removebg.png";
import "../styles/Hero.css";

export default function Hero() {
    return (
        <section id="about">
        <div className="hero">
        <div className="container">
        <div className="hero-header">
        <h1>Find Your Rental</h1>
        </div>
        <p className="hero-p">
        Experience the outdoors with Sun Flo Rentalz.
        <br/>
                Serving Central Florida with premium vacation rentals.
                </p>
                <div className="trailer-container">
                    <img className="stacked-logo" src= {img} alt=""/>
                </div>
            </div>
        </div>
        </section>
    );
}