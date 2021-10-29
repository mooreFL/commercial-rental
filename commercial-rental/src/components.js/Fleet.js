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
                    Year
                    </p>
                    <p className="trailer-info">
                    Trailer Make
                    </p>
                    <p className="trailer-info">
                    Model
                    </p>
                    <p className="trailer-info">
                    Sleeps #
                    </p>
                    <div>
                    <img className="trailer-photo" src= {img}/>
                    </div>
                </div>
                <div className="fleet-info">
                    <p className="trailer-info">
                    Year
                    </p>
                    <p className="trailer-info">
                    Trailer Make
                    </p>
                    <p className="trailer-info">
                    Model
                    </p>
                    <p className="trailer-info">
                    Sleeps #
                    </p>
                    <div>
                    <img className="trailer-photo" src= {img}/>
                    </div>
                </div>
                <div className="fleet-info">
                    <p className="trailer-info">
                    Year
                    </p>
                    <p className="trailer-info">
                    Trailer Make
                    </p>
                    <p className="trailer-info">
                    Model
                    </p>
                    <p className="trailer-info">
                    Sleeps #
                    </p>
                    <div>
                    <img className="trailer-photo" src= {img}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
