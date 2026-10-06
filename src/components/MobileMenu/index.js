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

        {[
          ["Memberships", "/MemberShip", "/MemberShip#india-memberships"],
          ["Gallery", "/gallery", "/india/gallery"],
          ["Reviews", "/Reviews", "/india/reviews"],
        ].map(([label, canadaHref, indiaHref]) => (
          <div key={label} className="border-t border-white/10 pt-4">
            <p className="text-[13px] uppercase tracking-[0.18em] text-gray-300">
              {label}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                href={canadaHref}
                onClick={onClose}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-[12px] uppercase text-white transition hover:border-[#e7b826] hover:text-[#e7b826]"
              >
                Canada
              </Link>
              <Link
                href={indiaHref}
                onClick={onClose}
                className="rounded-lg border border-[#e7b826]/50 bg-[#e7b826]/10 px-3 py-2 text-center text-[12px] uppercase text-[#e7b826] transition hover:bg-[#e7b826] hover:text-black"
              >
                India
              </Link>
            </div>
          </div>
        ))}

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
