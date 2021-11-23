import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Paymenttest from "./components.js/Payment";

function App() {
  

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Paymenttest />} />
        <Route exact path="/success" element={<Home />} />
        <Route exact path="/cancel" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

