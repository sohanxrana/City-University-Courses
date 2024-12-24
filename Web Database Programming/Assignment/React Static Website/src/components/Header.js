import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"; // Link to the CSS file

const Header = () => (
  <header className="navbar">
    <div className="logo">
      <Link to="/">
        <img src="../img/logo.jpg" alt="Logo" />
      </Link>
    </div>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
