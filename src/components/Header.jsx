import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <div className="col-sm-10 text-right menu-1">
              <ul>
			  <li>
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services">
                    Services
                  </NavLink>
                </li>
                {/* <li className="has-dropdown">
                  <NavLink to="/projects">
                    Projects
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/contact">
                    Contact Us
                  </NavLink>
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
