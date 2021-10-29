import React from "react";
import Navbar from "./components.js/Navbar";
import Hero from "./components.js/Hero";
import Fleet from "./components.js/Fleet"
import './App.css';

export default function App() {
  return (
   <main>
   <Navbar />
   <Hero />
   <Fleet />
   </main>
  );
}
