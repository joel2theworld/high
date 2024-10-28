import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './js/main.js';
import 'waypoints/lib/jquery.waypoints.min.js'; 
import Services from './pages/Services.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </Router>
  )
}

export default App
