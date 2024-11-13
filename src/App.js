import React from "react";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import "./js/main.js";
import "waypoints/lib/jquery.waypoints.min.js";
import Services from "./pages/Services.jsx";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>High Park Architecture</title>
        <meta name="description" content="Premier Architects specializes in innovative architectural designs across Nigeria, featuring projects like Lekki Beach Front and Jade's Court in Lagos." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
