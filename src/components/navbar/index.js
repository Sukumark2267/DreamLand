"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
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

  const locationMenus = [
    {
      label: "Memberships",
      canadaHref: "/MemberShip",
      indiaHref: "/MemberShip#india-memberships",
    },
    {
      label: "Gallery",
      canadaHref: "/gallery",
      indiaHref: "/india/gallery",
    },
    {
      label: "Reviews",
      canadaHref: "/Reviews",
      indiaHref: "/india/reviews",
    },
  ];

  return (
    <header
      className={`site-header fixed w-full z-[999] transition-all duration-300 relative ${
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
            {locationMenus.map((menu) => (
              <div key={menu.label} className="group relative h-10 flex items-center">
                <Link
                  href={menu.canadaHref}
                  className="inline-flex items-center gap-1 hover:text-[#e7b826] transition"
                >
                  {menu.label}
                  <ChevronDown size={13} aria-hidden="true" />
                </Link>

                <div className="invisible absolute left-3 top-full min-w-40 translate-y-2 rounded-b-xl border border-white/10 bg-black/98 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <Link
                    href={menu.canadaHref}
                    className="block rounded-lg px-3 py-2.5 text-[10px] tracking-[0.18em] hover:bg-white/10 hover:text-[#e7b826]"
                  >
                    Canada
                  </Link>
                  <Link
                    href={menu.indiaHref}
                    className="block rounded-lg px-3 py-2.5 text-[10px] tracking-[0.18em] hover:bg-white/10 hover:text-[#e7b826]"
                  >
                    India
                  </Link>
                </div>
              </div>
            ))}
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
