// components/Footer.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialButtons from "../SocialButtons";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* Glassy main footer block */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-8 md:px-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand / About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo/dl_icon_white_empty.png"
                  alt="Dreamland Athletics"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">
                    Dreamland
                  </p>
                  <p className="text-sm font-semibold text-white uppercase tracking-[0.16em]">
                    Athletics
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 max-w-xs">
                Brampton&apos;s premier fitness studio specializing in
                performance training, strength, conditioning and community-driven
                results.
              </p>

              <div className="flex">
                <SocialButtons />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300">
                Quick Links
              </h4>
              <div className="h-[2px] w-10 bg-[#e7b826]" />
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-[#e7b826] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/AboutUs"
                    className="hover:text-[#e7b826] transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services"
                    className="hover:text-[#e7b826] transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Gallery"
                    className="hover:text-[#e7b826] transition"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300">
                Support
              </h4>
              <div className="h-[2px] w-10 bg-[#e7b826]" />
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/ContactUs"
                    className="hover:text-[#e7b826] transition"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/PrivacyPolicy"
                    className="hover:text-[#e7b826] transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/TermsAndConditions"
                    className="hover:text-[#e7b826] transition"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Visit / Hours */}
            <div className="space-y-4">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300">
                Visit Us
              </h4>
              <div className="h-[2px] w-10 bg-[#e7b826]" />
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-white">Studio Address</p>
                  <p className="text-gray-300">
                    860 North Park Drive,
                    <br />
                    Brampton L6S 4N5 Brampton
                    <br />
                    ( Back side of the day care ) 

                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Timings</p>
                  <p>Mon–Fri: 6:00 am – 9:00 pm</p>
                  <p>Lunch Time: 2:00 pm - 4:00 pm</p>
                  <p>Sat: 10:00 am – 2:00 pm</p>
                </div>

                <div>
                  <p className="font-semibold text-white">Contact</p>
                  <a
                    href="tel:+19055551234"
                    className="block hover:text-[#e7b826] transition"
                  >
                    (905) 555-1234
                  </a>
                  <a
                    href="mailto:info@dreamlandathletics.com"
                    className="block hover:text-[#e7b826] transition"
                  >
                    info@dreamlandathletics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-gray-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Dreamland Athletics. All rights
            reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
