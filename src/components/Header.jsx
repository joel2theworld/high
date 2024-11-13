import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import '../css/Header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fh5co-nav" role="navigation">
      <div className="container">
        <div className="top-menu">
          <div className="row">
            <div className="col-sm-2">
              <div id="fh5co-logo">
                <NavLink to="/">
                  <div className="logo">
                    <span className="high-park">HIGH PARK</span>
                    <span className="architecture-interior-architecture">
                      ARCHITECTURE + INTERIOR ARCHITECTURE
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>
            {/* Hamburger Icon
            <div className="hamburger" onClick={toggleMenu}>
              &#9776;
            </div> */}
            <div className={`col-sm-10 text-right menu-1 ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
