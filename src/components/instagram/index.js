"use client";

import React, { useEffect } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

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

          {/* Section Title */}
{/* SECTION HEADER */}
{/* SECTION HEADER */}
<div className="col-span-full text-center mb-12 animate-fade-in">
  <p className="text-[#e7b826] tracking-[0.35em] text-xs uppercase mb-2">
    SOCIAL MEDIA
  </p>

  <h2 className="font-gothic text-4xl md:text-5xl lg:text-6xl font-bold uppercase inline-block relative">
    #DREAMLANDLIFE

    {/* Gold underline animation */}
    <span
      className="absolute left-1/2 -bottom-2 w-0 h-[3px] bg-[#e7b826] rounded-full animate-underline"
      style={{ transform: "translateX(-50%)" }}
    ></span>
  </h2>

  <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
    Follow our community across{" "}
    <span className="text-[#e7b826] font-semibold">
      Instagram, YouTube, X, and Facebook
    </span>{" "}
    for workouts, member wins, and studio moments.
  </p>
</div>

          {/* SOCIAL CARDS */}
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dreamland_brampton"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl p-5 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-[#e7b826] transition shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400">
                  <FaInstagram className="text-white text-lg" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.25em] text-gray-300 uppercase">
                    INSTAGRAM
                  </p>
                  <p className="font-semibold text-sm">@dreamland_brampton</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                Daily stories, transformation posts & studio moments.
              </p>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl p-5 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-[#e7b826] transition shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full flex items-center justify-center bg-[#FF0000]">
                  <FaYoutube className="text-white text-lg" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.25em] text-gray-300 uppercase">
                    YOUTUBE
                  </p>
                  <p className="font-semibold text-sm">Dreamland Athletics</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                Long-form tips, routines & coaching breakdowns.
              </p>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl p-5 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-[#e7b826] transition shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
                  <FaTwitter className="text-black text-lg" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.25em] text-gray-300 uppercase">
                    X (TWITTER)
                  </p>
                  <p className="font-semibold text-sm">@dreamland_fit</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                Quick updates, thoughts & fitness announcements.
              </p>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl p-5 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-[#e7b826] transition shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full flex items-center justify-center bg-[#1877F2]">
                  <FaFacebookF className="text-white text-lg" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.25em] text-gray-300 uppercase">
                    FACEBOOK
                  </p>
                  <p className="font-semibold text-sm">Dreamland Athletics</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                Event updates, photos & community highlights.
              </p>
            </a>

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
