// Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Phone: 123-456-7890</p>
        <p>Email: itdept@polytechnic.ac.th</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=..." 
          title="Google Maps" 
          width="600" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
