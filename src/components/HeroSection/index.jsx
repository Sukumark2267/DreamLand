"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="landing-page bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[100svh] overflow-hidden">
        {/* ✅ Static Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fitness_1.jpg"
            alt="Dreamland Athletics Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-10 bg-black/75" />

        {/* ✅ Hero Content (fits in one screen) */}
        <div className="relative z-20 mx-auto h-full max-w-6xl px-4 text-center flex flex-col items-center justify-center">
          {/* Logo */}
          <Image
            src="/images/logo/logo-primary.png"
            alt="Dreamland Athletics Gym"
            width={220}
            height={220}
            className="w-16 md:w-20 lg:w-24 h-auto object-contain rounded-xl mb-3"
            priority
          />

          {/* Headline */}
          <h1 className="font-gothic text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-[0.12em] mb-2">
            BEST FITNESS STUDIO{" "}
            <span className="text-[#e7b826]">FRANCHISE</span> IN{" "}
            <span className="text-[#e7b826]">CANADA</span>
          </h1>

          {/* Location */}
          <p className="font-swiss text-gray-200 text-[11px] md:text-sm lg:text-base tracking-[0.10em] mb-3 uppercase opacity-90">
            Currently operating in{" "}
            <span className="text-[#e7b826]">Brampton, Ontario</span>
          </p>

          {/* Brand line */}
          <p className="font-swiss text-gray-200 text-[11px] md:text-sm lg:text-base tracking-[0.12em] mb-1">
            CANADIAN FITNESS BRAND HIGHLY FOCUSED ON
          </p>

          {/* Community line */}
          <p className="font-swiss text-gray-300 text-[11px] md:text-sm lg:text-base tracking-[0.10em] mb-3 uppercase opacity-90">
            Community <span className="text-[#e7b826]">•</span> Transformation{" "}
            <span className="text-[#e7b826]">•</span> Results
          </p>

          {/* Turtle line */}
          <h2
            className="text-base sm:text-xl md:text-2xl lg:text-2xl font-extrabold uppercase tracking-[0.22em] text-white"
            style={{ textShadow: "0 0 22px rgba(0,0,0,0.85)" }}
          >
            <span className="text-[#e7b826]">Be a Turtle</span>
            <span className="text-white"> — Slow</span>
            <span className="text-[#ff7a00]">.</span>
            <span className="text-[#ff7a00]"> Steady</span>
            <span className="text-[#ff3b30]">.</span>
            <span className="text-[#ff3b30]"> Unstoppable</span>
            <span className="text-[#e7b826]">.</span>
          </h2>

          {/* Supporting line */}
          <p className="text-[11px] sm:text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed opacity-90 ">
            Private, highly focused training studio for serious people who
            believe in slow, steady, unstoppable progress.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              href="#memberships"
              className="bg-[#e7b826] hover:bg-[#ffd84e] text-black font-semibold py-2 px-5 md:py-2.5 md:px-8 rounded-lg transition duration-300 text-xs md:text-sm uppercase tracking-wide"
            >
              View Memberships
            </Link>

            <Link
              href="#contact"
              className="border border-[#e7b826] text-[#e7b826] hover:bg-[#e7b826] hover:text-black font-semibold py-2 px-5 md:py-2.5 md:px-8 rounded-lg transition duration-300 text-xs md:text-sm uppercase tracking-wide"
            >
              Start Your Journey
            </Link>

            <Link
              href="#contact"
              className="bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold py-2 px-5 md:py-2.5 md:px-8 rounded-lg transition duration-300 text-xs md:text-sm uppercase tracking-wide backdrop-blur"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
