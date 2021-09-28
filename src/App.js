import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";

function App() {
  return (
    <div className="main">
      <Nav />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
