// components/Footer.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import SocialButtons from "../SocialButtons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content justify-evenly hidden lg:flex">
          {/* Brand Info */}
          <div className="footer-column">
            <div className="flex">
              <div>
                <Image
                  src="/images/logo/dl_icon_white_empty.png"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="md:h-6/9 xl:h-8/9 lg:w-35 xl:w-48 lg:mr-2 xl:mr-10"
                />
              </div>
              <div>
                <Link href="/">
                  <Image
                    src="/images/logo/dl_white_empty_primary - text.png"
                    alt="Logo"
                    width={200}
                    height={100}
                  />
                </Link>{" "}
                <br></br>
                {/* <h4>DREAMLAND <br></br>ATHLETICS</h4> */}
                <p className="w-65 xl:w-80">
                  Brampton&rsquo;s premier fitness facility specializing in
                  athletic performance training and community fitness.
                </p>
                <div className="min-h-20 bg-none flex md:scale-70 lg:scale-85">
                  <SocialButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {/* <li><a href="#instagram">Instagram</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="/Blogs">Blogs</a></li> */}
              <li>
                <Link href="/AboutUs">About</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/dreamland_brampton">
                  Instagram
                </Link>
              </li>


              {/* <li>
                <Link href="/Blogs">Blogs</Link>
              </li> */}
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <Link href="/ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy">Privacy Policies</Link>
              </li>
              <li>
                <Link href="/TermsAndConditions">Terms & Conditions</Link>
              </li>
              {/* <li><a href="#trainers">Trainers</a></li> */}
            </ul>
          </div>
          {/* Hours */}
          <div className="footer-column">
            <h4>Timings</h4>
            <ul className="footer-links">
              <li>Mon–Fri: 5am – 10pm</li>
              <li>Sat–Sun: 7am – 8pm</li>
              <li>Holidays: 8am – 4pm</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Dreamland Athletics. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
