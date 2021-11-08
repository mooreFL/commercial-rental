import React from "react";
import "../styles/Navbar.css";
import { FaPhoneSquareAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="nav">
        <div className="nav-contents">
          <ul>
            <p className="title">Sun Flo Rentalz</p>
            <li>About</li>
            <li>Our Fleet</li>
            <li>Book Now</li>
            <li>Reviews</li>
            <li>COVID-19 Update</li>
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
