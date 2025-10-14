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
        <div className="footer-content justify-center lg:justify-evenly hidden lg:flex">
          {/* Brand Info */}
          <div className="footer-column">
            <div className="flex">
              <div>
                <Image
                  src="/images/logo/dl_icon_white_empty.png"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="hidden lg:block md:h-8/9 xl:h-8/9 lg:w-35 xl:w-48 lg:mr-2 xl:mr-10"
                />
              </div>
              <div>
                <Link href="/">
                  <Image
                    src="/images/logo/dl_white_empty_primary - text.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    className="hidden lg:block"
                  />
                </Link>{" "}
                <Link href="/">
                  <Image
                    src="/images/logo/dl_white_empty_primary.png"
                    alt="Logo"
                    width={400}
                    height={100}
                    className="mx-auto block lg:hidden"
                  />
                </Link>{" "}
                <br></br>
                {/* <h4>DREAMLAND <br></br>ATHLETICS</h4> */}
                <p className="w-95 md:w-170 lg:w-80">
                  Brampton&rsquo;s premier fitness facility specializing in
                  athletic performance training and community fitness.
                </p>
                <div className="min-h-20 bg-none flex justify-center lg:justify-start md:scale-80 lg:scale-85">
                  <SocialButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <div className="footer-column-1">
              <h4>Quick Links</h4>
              <ul className="footer-links">
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
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <div className="footer-column-2">
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
              </ul>
            </div>
          </div>
          {/* Hours */}
          <div className="footer-column">
            <div className="footer-column-3">
              <h4>Timings</h4>
              <ul className="footer-links">
                <li>Mon–Fri: 5am – 10pm</li>
                <li>Sat–Sun: 7am – 8pm</li>
                <li>Holidays: 8am – 4pm</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="footer-column-mob pt-3 lg:hidden">
          <div className="footer-column-3-mob">
            <h4>Timings</h4>
            <ul className="footer-links-mob">
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
