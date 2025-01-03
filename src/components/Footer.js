import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are the IT Department at Chiang Mai Polytechnic, dedicated to providing quality education in information technology.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:itdept@polytechnic.ac.th">itdept@polytechnic.ac.th</a></p>
          <p>Tel: 123-456-7890</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 IT Department, Chiang Mai Polytechnic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
