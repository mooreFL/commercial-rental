import React, { Component } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import navbarlogo from "../../images/navbarlogo.png";


import "./Navigation.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div id="navigation">
        <div id="mobilenavigation">
          <img className="title" src={navbarlogo} alt="sunflo rentalz logo"/>
          {/*<p className="title">Sun Flo Rentalz</p>*/}
          <div id="burger" onClick={this.handleClick}>
            <div
              id="line1"
              className={this.state.clicked ? "line1click" : ""}
            ></div>
            <div
              id="line2"
              className={this.state.clicked ? "line2click" : ""}
            ></div>
            <div
              id="line3"
              className={this.state.clicked ? "line3click" : ""}
            ></div>
          </div>
        </div>
        <div className={this.state.clicked ? "navbar active" : "navbar"}>
          <a href="#about" className="navlinks" onClick={this.handleClick}>
            About
          </a>
          <a href="#fleet" className="navlinks" onClick={this.handleClick}>
            Our Fleet
          </a>
          <a href="#contact" className="navlinks" onClick={this.handleClick}>
            Get Quote
          </a>
          <a href="#reviews" className="navlinks" onClick={this.handleClick}>
            Reviews
          </a>
          <a  className="phonenum nav-links-number" href="tel:+13525849950">
              <FaPhoneSquareAlt size="22px" className="phoneNav" />
              (352) 584-9950
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
