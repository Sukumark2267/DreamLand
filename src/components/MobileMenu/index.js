"use client";

import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed top-14 left-0 w-full bg-black text-white z-[9999] border-t border-neutral-800 shadow-lg">
      <div className="flex flex-col px-6 py-5 space-y-5">
        <Link
          href="/"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          Home
        </Link>

        <Link
          href="/AboutUs"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          About
        </Link>

        <Link
          href="/WhatWeOffer"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          What We Offer
        </Link>

        <Link
          href="/MemberShip"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          Memberships
        </Link>

        <Link
          href="/gallery"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          Gallery
        </Link>

        <Link
          href="/Reviews"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          Reviews
        </Link>

        <Link
          href="/ContactUs"
          onClick={onClose}
          className="block text-white text-[15px] uppercase"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}