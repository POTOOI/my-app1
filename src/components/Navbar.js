import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import logo from './logo.png'; // Replace with your logo file path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="navbar-title">IT Department</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about" className="navbar-link">About Us</Link></li>
          <li className="dropdown">
            <Link to="/courses" className="navbar-link dropdown-toggle">Courses</Link>
            <ul className="dropdown-menu">
              <li><Link to="/courses/web" className="dropdown-item">Web Development</Link></li>
              <li><Link to="/courses/data" className="dropdown-item">Data Science</Link></li>
              <li><Link to="/courses/network" className="dropdown-item">Networking</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
