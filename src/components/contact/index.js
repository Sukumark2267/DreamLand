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
            <h4 style={{fontWeight:'bold'}}>LOCATION</h4>
            <p>860 N Park Dr, Brampton, ON L6S 4N5, Canada</p>
          </div>
          <div className="contact-info">
            <h4 style={{fontWeight:'bold'}}>HOURS</h4>
            <p>Monday–Friday: 5am – 10pm</p>
            <p>Saturday–Sunday: 7am – 8pm</p>
          </div>
          <div className="contact-info">
            <h4 style={{fontWeight:'bold'}}>CONTACT</h4>
            <a href="tel:+19055551234">(905) 555-1234</a>
            <a href="mailto:info@dreamlandathletics.com">info@dreamlandathletics.com</a>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7687165970583!2d-79.74951353497413!3d43.72977157442773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b173a1b0a0e17%3A0xdadb9bd5d608dd4e!2sDreamland%20Athletics!5e0!3m2!1sen!2sin!4v1747585502192!5m2!1sen!2sin"
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
