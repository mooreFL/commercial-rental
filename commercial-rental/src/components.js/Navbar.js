import React, {useState} from "react";
import "../styles/Navbar.css";
import Hamburger from "./Hamburger";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  const [open, setOpen] = useState(false); 
 const openMenu = () => {
    console.log("click")
    setOpen(true)
  }
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
            <li className="phonenum nav-links-number">
            <FaPhoneSquareAlt size="22px" className="phoneNav"/>
            (352) 584-9950
            </li>
            </a>
          </ul>
          <div onClick={openMenu}>
          { open ? <Hamburger open = {open}/> : <GiHamburgerMenu  size="30px" className={ open ? "hamburgerIcon active": "hamburgerIcon"} />}
          </div>
        </div>
    </div>
  );
}
