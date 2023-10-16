import React from "react";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Greeting from "./pages/Greeting.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/greeting" element={<Greeting />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
