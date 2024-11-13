import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./js/main.js";
import "waypoints/lib/jquery.waypoints.min.js";
import Services from "./pages/Services.jsx";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>High Park | Visionary Architecture, Modern Creations.</title>
        <meta name="description" content="Premier Architects specializes in innovative architectural designs across Nigeria, featuring projects like Lekki Beach Front and Jade's Court in Lagos." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
