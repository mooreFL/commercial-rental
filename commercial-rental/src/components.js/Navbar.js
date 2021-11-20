import React from "react";
import "../styles/Navbar.css";
import { FaPhoneSquareAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="nav">
        <div className="nav-contents">
          <ul>
            <p className="title">Sun Flo Rentalz</p>
            <a href="#about"><li className="nav-links">About</li></a>
            <a href="#fleet"><li className="nav-links">Our Fleet</li></a>
            <a href="#contact"><li className="nav-links">Get Quote</li></a>
            <a href="#reviews"><li className="nav-links">Reviews</li></a>
            <a href="tel:+13525849950">
            <li className="phonenum nav-links">
            <FaPhoneSquareAlt size="22px" className="phoneNav"/>
            (352) 584-9950
            </li>
            </a>
          </ul>
        </div>
    </div>
  );
}
