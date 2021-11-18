import React from "react";
import Navbar from "../components.js/Navbar";
import Covid from "../components.js/Covid"
import Hero from "../components.js/Hero";
import Fleet from "../components.js/Fleet";
import ContactForm from "../components.js/Contactform";
import Reviews from "../components.js/Reviews";
import Footer from "../components.js/Footer";

{/*import Stripepay from "../components.js/Stripepay";*/}

const Home = () => {
  return (
    <div>
    <Navbar />
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
