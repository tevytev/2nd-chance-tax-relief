import { NavLink } from "react-router-dom";
import { useState } from "react";
// fixed syntax
import "./Navbar.css";
import logo from "../../assets/nav-logo.png";

export default function NavBar(props) {

    const {
        navActive,
        setNavActive
    } = props


  return (
    <>
      <header id="header">
        <div className="logo-header-container">
          <img src={logo} alt="" />
        </div>
        <nav id="desktop-nav" className="nav">
          <ul className="nav-ul">
            <li>
              <a href="#home-section">Home</a>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#contact-form">Contact</a>
            </li>
          </ul>
        </nav>
        {/* <div onClick={() => {
            setNavActive(!navActive);
        }} id="burger">
          <div id="nav-line1" className="burger-line1"></div>
          <div id="nav-line2" className="burger-line2"></div>
        </div> */}
        <input onClick={() => {
            setNavActive(!navActive);
        }} class="toggle-checkbox" id="toggle" type="checkbox" />
<label class="hamburger" for="toggle">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</label>
      </header>
    </>
  );
}
