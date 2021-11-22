import React from "react";
import Covid from "../components.js/Covid"
import Hero from "../components.js/Hero";
import Fleet from "../components.js/Fleet";
import ContactForm from "../components.js/Contactform";
import Reviews from "../components.js/Reviews";
import Footer from "../components.js/Footer";
import Navigation from "../components.js/Navigation/Navigation";


const Home = () => { 
  return (
    <div>
    <Navigation />
    <Covid />
    <Hero />
    <Fleet />
    <ContactForm />
    <Reviews />
    <Footer />
    </div>
  );
};

export default Home;
