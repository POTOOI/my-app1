import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="IT Department Logo" />
        <h1>IT Department</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Call-to-Action */}
      <div className="cta">
        <a href="/apply" className="btn">Apply Now</a>
        <a href="/login" className="btn btn-secondary">Login</a>
      </div>
    </header>
  );
}

export default Header;
