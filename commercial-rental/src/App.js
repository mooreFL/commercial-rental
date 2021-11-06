import React from "react";
import Navbar from "./components.js/Navbar";
import Hero from "./components.js/Hero";
import Fleet from "./components.js/Fleet"
import ContactForm from "./components.js/Contactform"
import Reviews from "./components.js/Reviews"
import Footer from "./components.js/Footer"
import './App.css';

export default function App() {
  return (
   <main>
   <Navbar />
   <Hero />
   <Fleet />
   <ContactForm />
   <Reviews />
   <Footer />
   </main>
  );
}
