"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
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
      className={`fixed w-full z-50 bg-white transition-all duration-300 overflow-hidden ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      {/* LEFT LOGO */}
      <div className="logo px-6 lg:px-10 z-11">
        <Link href="/">
          <Image
            src="/images/logo/dl_white_empty_primary - text.png"
            alt="Logo"
            width={170}
            height={100}
            className="scale-135"
          />
        </Link>
      </div>

      {/* CENTER LOGO */}
      <div className="logo z-10">
        <Link href="/">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-18 scale-2000 sm:scale-1000 md:scale-1000 lg:scale-2000 pt-1"
          />
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section px-6 lg:px-10 z-10 flex items-center justify-end gap-6">
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          <Link href="/AboutUs" className="transition">
            About
          </Link>
          <Link href="/Services" className="transition">
            Services
          </Link>
          <Link href="/ContactUs" className="transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-white focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}
