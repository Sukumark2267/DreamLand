"use client";

import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import SocialButtons from "../SocialButtons";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black text-white z-50 transition-transform duration-300 max-h-screen max-w-screen ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white focus:outline-none"
          >
            <X size={35} />
          </button>
        </div>
        <div className="relative z-20 flex flex-col justify-start items-center px-4 text-center">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Dreamland Athletics Gym"
            width={256}
            height={256}
            className="w-20 md:w-48 lg:w-44 h-auto object-contain rounded-xl"
            priority
          />
          <h1
            id="Hero-Heading"
            className="text-2xl md:text-md lg:text-4xl font-bold lg:px-100 md:px-50 px-15 pt-2 pb-10 leading-tight text-white"
            style={{
              fontFamily: "Swiss721Black",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
              letterSpacing: "2px",
            }}
          >
            DREAMLAND <br /> ATHLETICS
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center pt-0 gap-8 text-lg font-semibold">
          <Link
            href="/AboutUs"
            onClick={onClose}
            className="hover:text-[#ffc92e] text-white"
          >
            About
          </Link>
          <Link
            href="/Services"
            onClick={onClose}
            className="hover:text-[#ffc92e] text-white"
          >
            Services
          </Link>
          <Link
            href="/ContactUs"
            onClick={onClose}
            className="hover:text-[#ffc92e] text-white"
          >
            Contact Us
          </Link>
          <Link
            href="https://www.instagram.com/dreamland_brampton"
            onClick={onClose}
            className="hover:text-[#ffc92e] text-white"
          >
            Instagram
          </Link>
          <Link
            href="/PrivacyPolicy"
            onClick={onClose}
            className="hover:text-[#ffc92e] text-white"
          >
            Privacy Policies
          </Link>
          <Link
            href="/TermsAndConditions"
            onClick={onClose}
            className="hover:text-[#ffc92e] text-white"
          >
            Terms & Conditions
          </Link>
          <div className="min-h-20 bg-none flex justify-center lg:justify-start md:scale-80 lg:scale-85">
            <SocialButtons />
          </div>
        </div>
      </div>
    </>
  );
}
