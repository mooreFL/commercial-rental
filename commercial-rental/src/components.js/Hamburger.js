import React from 'react'

function Hamburger({open}) {
    return (
        <div id="hamburger" className={open ? "hamburger-menu active"  :  "hamburger-menu"}>
            <ul id="mobileNav">
            <a href="#about"><li className="hamburger-links">About</li></a>
            <a href="#fleet"><li className="hamburger-links">Our Fleet</li></a>
            <a href="#contact"><li className="hamburger-links">Get Quote</li></a>
            <a href="#reviews"><li className="hamburger-links">Reviews</li></a>
            </ul>

        </div>
    )
}

export default Hamburger
