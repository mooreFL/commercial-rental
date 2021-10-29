import React from "react";
import img from "../images/trailerstockphoto.png";
import "../styles/Fleet.css";
// import { equipment } from "../data";

export default function Fleet() {
    return (
        <div className="fleet">
        <p className="fleet-p">
        Our Fleet 
        </p>
            <div className="fleet-container">
                <div className="fleet-info">
                    <p className="trailer-info">
                    2021
                    </p>
                    <p className="trailer-info">
                    Shasta
                    </p>
                    <p className="trailer-info">
                    310k
                    </p>
                    <p className="trailer-info">
                    Sleeps 6
                    </p>
                    <div>
                    <img className="trailer-photo" src= {img}/>
                    </div>
                </div>
                <div className="fleet-info">
                    <p className="trailer-info">
                    2016
                    </p>
                    <p className="trailer-info">
                    Jayco
                    </p>
                    <p className="trailer-info">
                    Jayflight 26BH
                    </p>
                    <p className="trailer-info">
                    Sleeps 4
                    </p>
                    <div>
                    <img className="trailer-photo" src= {img}/>
                    </div>
                </div>
                <div className="fleet-info">
                    <p className="trailer-info">
                    2016
                    </p>
                    <p className="trailer-info">
                    Coachmen
                    </p>
                    <p className="trailer-info">
                    Pursuit 33BH Class-A RV
                    </p>
                    <p className="trailer-info">
                    Sleeps 8
                    </p>
                    <div>
                    <img className="trailer-photo" src= {img}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
