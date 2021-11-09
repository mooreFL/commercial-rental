import React from "react";
import Navbar from "./components.js/Navbar";
import Hero from "./components.js/Hero";
import Fleet from "./components.js/Fleet"
import ContactForm from "./components.js/Contactform"
import Reviews from "./components.js/Reviews"
import Footer from "./components.js/Footer"
import './App.css';
import StripeContainer from "./components.js/StripeContainer";
import { useState } from "react";


function App() {
  const [showItem, setShowItem] = useState(false)
    return (
   <main>
   <Navbar />
   <Hero />
   <Fleet />
    <h1>Pay RV Deposit</h1>
    { showItem ? <StripeContainer/> : <React.Fragment> <h3>$1500.00</h3><button className="stripe-button" onClick={() => setShowItem(true)}>Pay RV Deposit</button> </React.Fragment> }
    <h1>Pay Trailer Deposit</h1>
    { showItem ? <StripeContainer/> : <React.Fragment> <h3>$500.00</h3><button className="stripe-button" onClick={() => setShowItem(true)}>Pay RV Deposit</button> </React.Fragment> }
   <ContactForm />
   <Reviews />
   <Footer />
   </main>
  );
}

export default App;