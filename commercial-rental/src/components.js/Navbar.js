import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
       <div className="nav">
        <div className="nav-container">
          <nav>
            <ul>
              <p className="title">Sun Flo Rentalz</p>
              <li>About</li>
              <li>Our Fleet</li>
              <li>Book Now</li>
            </ul>
          </nav>
        </div>
       </div>
    );
}