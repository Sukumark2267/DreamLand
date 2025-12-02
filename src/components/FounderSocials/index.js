"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const card1Socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jay.chundawat23?igsh=MjY5N2NkaGh3Z2p6&utm_source=qr",
    icon: <FaInstagram size={28} />,
  },
];

const card2Socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/elevatewith_chirag?igsh=MWRlZzkyZ3Fkc2drOA%3D%3D&utm_source=qr",
    icon: <FaInstagram size={28} />,
  },
];

// Premium Glassy Card Component
const Card = ({ profileImg, socials, name, description }) => (
  <div
    className="
      w-[22em] 
      rounded-2xl
      p-6 
      backdrop-blur-xl 
      bg-white/10 
      border border-white/20 
      shadow-[0_25px_60px_rgba(0,0,0,0.8)] 
      transition-all duration-500
      hover:bg-white/20 
      hover:border-[#e7b826] 
      hover:shadow-[0_35px_80px_rgba(0,0,0,0.9)]
      flex flex-col
    "
  >
    {/* Founder Image */}
    <div className="w-full h-[18rem] relative rounded-xl overflow-hidden mb-5 shadow-lg">
      <Image
        src={profileImg}
        alt="Profile"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Name */}
    <h3 className="text-xl font-semibold text-center tracking-wide mb-1">
      {name}
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-sm leading-relaxed text-center mb-4 px-2">
      {description}
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-4 mt-auto">
      {socials.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            h-10 w-10 
            flex items-center justify-center 
            rounded-full 
            bg-[#e7b826] 
            text-black 
            hover:bg-[#ffd84e] 
            shadow-[0_0_15px_rgba(231,184,38,0.5)]
            transition
          "
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

const FounderSocials = () => {
  return (
    <section className="px-6 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#e7b826] mb-2">
          Leadership
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
          Our Founders
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Meet the visionaries behind Dreamland Athletics — shaping Brampton’s
          most dedicated fitness community.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <Card
          profileImg="/images/elements/founder1.png"
          socials={card1Socials}
          name="Chirag Guleria"
          description="I'm Chirag, the mind behind Elevate With Chirag — helping people grow through powerful content, community, and consistent motivation."
        />

        <Card
          profileImg="/images/elements/founder2.png"
          socials={card2Socials}
          name="Jay Chundawat"
          description="I'm Jay, a digital creator blending lifestyle, fitness, and storytelling — inspiring thousands through relatable and aesthetic content."
        />
      </div>
    </section>
  );
};

export default FounderSocials;
