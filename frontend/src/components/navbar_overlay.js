import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Navbar, Row } from "react-bootstrap";
// import AboutPage from './about'

const Navbar_overlay = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [navbar_overlay, setNavbar_overlay] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbar_overlay(true);
    } else {
      setNavbar_overlay(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    
    <Navbar
      className={navbar_overlay ? "overlay" : "navbar_overlay fixed-top "}
    >
      <div className={click ? "navbar_overlay active" : "navbar_overlay"}>
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-s-12 col-lg-12">
          <a href="/">
            <img   className="logo"
              src={
                click ? "/static/images/10_1.png" : "/static/images/logo_1.png "
              }
            
            />
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a href="/about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="/solutions">SOLUTIONS</a>
            </li>
            <li className="nav-item">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes style={{ color: "#f8f8f8" }} />
            ) : (
              <FaBars style={{ color: "black" }} />
            )}
          </div>
        </div>
      </div>
      </div>
    </Navbar>
  );
};

export default Navbar_overlay;
