"use client";

import React, { useEffect } from "react";
import { Inter } from "next/font/google";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function SocialMediaSection() {
  // Load Elfsight script for Instagram
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://static.elfsight.com/platform/platform.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section
      id="social-media"
      className="relative px-4 bg-black"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE — SOCIAL CARDS */}
        <div className="relative z-20 text-white">

         {/* ABOUT US CONTENT */}
<div
  className={`${inter.className} group rounded-xl p-6 sm:p-7 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-[#e7b826] transition duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.6)]`}
>
  <div className="flex flex-col h-full justify-between">
    <div>
      {/* <p className="text-[11px] tracking-[0.25em] text-gray-400 uppercase mb-2 font-medium">
        ABOUT US
      </p> */}

      <h2 className="text-xl sm:text-2xl  text-white leading-snug mb-3 tracking-tight">
        Welcome to Dreamland Athletics
      </h2>

      <div className="w-14 h-[2px] bg-[#e7b826] mb-5"></div>

      <p className="text-gray-300 text-sm leading-7 mb-4 font-normal">
       At Dreamland Athletics, we are more than just a gym,we are a community built on growth,
        support, and transformation.

      </p>

      <p className="text-gray-300 text-sm leading-7 mb-4 font-normal">
       Our mission is to help you become stronger, healthier, and more confident through personalized coaching, proper movement, 
       and sustainable habits that fit your lifestyle. We believe fitness is not just about workouts, but about building a mindset that carries into your everyday life.

      </p>

      <p className="text-gray-300 text-sm leading-7 font-normal">
       No matter your starting point or goal, you’ll find guidance, accountability, and a positive environment that motivates you to keep improving. We celebrate every win big or small, and push each other to be better every day.

      </p>
    </div>

    <div className="mt-6 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-sm text-[#e7b826] font-medium">
      Welcome to Dreamland, where your journey becomes our mission.
      </p>
    </div>
  </div>
</div>

        </div>

        {/* RIGHT SIDE — VIDEO */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
          <video
            src="/videos/dreamland_hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
