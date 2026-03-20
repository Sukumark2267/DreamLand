"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MobileMenu from "../MobileMenu";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-[999] transition-all duration-300 relative ${
        scrolled ? "bg-black shadow-lg" : "bg-black/95"
      }`}
    >
      <div className="w-full flex items-center justify-between px-2 lg:px-5 h-10">
        {/* LEFT: logo + desktop menu */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/dl_primary_logo.png"
              alt="Dreamland Athletics"
              width={200}
              height={50}
              priority
              className="h-[40px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4 ml-6 font-swiss text-[11px] tracking-[0.18em] uppercase text-white">
            <Link href="/" className="hover:text-[#e7b826] transition">
              Home
            </Link>
            <Link href="/AboutUs" className="hover:text-[#e7b826] transition">
              About
            </Link>
            <Link
              href="/WhatWeOffer"
              className="hover:text-[#e7b826] transition whitespace-nowrap"
            >
              What We Offer
            </Link>
            <Link
              href="/MemberShip"
              className="hover:text-[#e7b826] transition"
            >
              Memberships
            </Link>
            <Link href="/gallery" className="hover:text-[#e7b826] transition">
              Gallery
            </Link>
            <Link href="/Reviews" className="hover:text-[#e7b826] transition">
              Reviews
            </Link>
            <Link href="/ContactUs" className="hover:text-[#e7b826] transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* RIGHT: mobile menu button */}
        <button
          className="block lg:hidden text-white focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}