import React from 'react';
import '../styles/contact.css';
import contactImage from '../assets/img/contact-img.svg'; // Make sure to add your image path

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Cyberpunk Contact" />
        </div>
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="input-container">
              <input type="text" name="name" required placeholder="Your Name" className="contact-input" />
            </div>
            <div className="input-container">
              <input type="email" name="email" required placeholder="Your Email" className="contact-input" />
            </div>
            <div className="input-container">
              <textarea name="message" rows="5" required placeholder="Your Message" className="contact-input"></textarea>
            </div>
            <div className="input-container">
              <button type="submit" className="submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
