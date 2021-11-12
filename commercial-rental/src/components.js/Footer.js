import React from "react";
import "../styles/Footer.css";

import { FaFacebookSquare } from 'react-icons/fa';
import { FaPhoneSquareAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footerIcon">
        <a href="https://www.facebook.com/sunflorentalz/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare color="white" size="40px" className="fbIcon"/>
        </a>
        <a href="tel:+13525849950">
        <FaPhoneSquareAlt color="white" size="40px" className="phoneIcon"/>
        </a>
        <br/>
        <small className="copyright">&copy; Copyright 2021, Sun Flo Rentalz</small>
      </div>

    </footer>
  );
}
