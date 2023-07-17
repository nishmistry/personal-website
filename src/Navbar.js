import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home">nish mistry</a>
      </div>
      <div className="navbar-right">
        <ul className="nav-items">
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact-form-container">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
