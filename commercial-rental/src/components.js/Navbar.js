import React from "react";
import "../styles/Navbar.css";
import { FaPhoneSquareAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="nav">
        <div className="nav-contents">
          <ul>
            <p className="title">Sun Flo Rentalz</p>
            <a href="#about"><li>About</li></a>
            <a href="#fleet"><li>Our Fleet</li></a>
            <a href="#contact"><li>Get Quote</li></a>
            <a href="#reviews"><li>Reviews</li></a>
            <li>COVID-19</li>
            <a href="tel:+13525849950">
            <li className="phonenum">
            <FaPhoneSquareAlt size="22px" className="phoneNav"/>
            (352) 584-9950
            </li>
            </a>
          </ul>
        </div>
    </div>
  );
}
