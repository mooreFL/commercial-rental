import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Paymenttest from "./components.js/Paymenttest";

function App() {
  

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Paymenttest />} />
      </Routes>
    </Router>
  );
}

export default App;

/* <Route exact path="/">
        <Navbar />
        <Hero />
        <Fleet />
        <Stripepay />
        <ContactForm />
        <Reviews />
        <Footer />
    </Route> */
