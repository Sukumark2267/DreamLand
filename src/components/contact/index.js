// components/ContactSection.jsx
"use client";
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="section-title">GET IN TOUCH</h2>

      <div className="contact-grid">
        {/* Contact Info */}
        <div>
          <div className="contact-info">
            <h4>LOCATION</h4>
            <p>123 Athletic Way, Brampton, ON L6P 3K1</p>
          </div>
          <div className="contact-info">
            <h4>HOURS</h4>
            <p>Monday–Friday: 5am – 10pm</p>
            <p>Saturday–Sunday: 7am – 8pm</p>
          </div>
          <div className="contact-info">
            <h4>CONTACT</h4>
            <a href="tel:+19055551234">(905) 555-1234</a>
            <br />
            <a href="mailto:info@dreamlandathletics.com">info@dreamlandathletics.com</a>
            <br />
            <a
              href="https://www.instagram.com/dreamland_brampton"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dreamland_brampton
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="cta-button" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9999999999995!2d-79.75999999999999!3d43.699999999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15df00000000%3A0xfffffffffffffff!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
