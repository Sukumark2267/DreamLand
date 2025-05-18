// components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Brand Info */}
        <div className="footer-column">
          <h4>DREAMLAND ATHLETICS</h4>
          <p>
            Brampton&rsquo;s premier fitness facility specializing in athletic performance training and
            community fitness.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul className="footer-links">
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#membership">Membership</a></li>
            {/* <li><a href="#trainers">Trainers</a></li> */}
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul className="footer-links">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#programs">My Account</a></li>
            {/* <li><a href="#membership">Membership</a></li> */}
            {/* <li><a href="#trainers">Trainers</a></li> */}
          </ul>
        </div>
        {/* Hours */}
        <div className="footer-column">
          <h4>HOURS</h4>
          <ul className="footer-links">
            <li>Mon–Fri: 5am – 10pm</li>
            <li>Sat–Sun: 7am – 8pm</li>
            <li>Holidays: 8am – 4pm</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Dreamland Athletics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

