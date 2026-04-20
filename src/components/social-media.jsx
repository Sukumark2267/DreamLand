"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@dreamland_brampton",
    href: "https://www.instagram.com/dreamland_brampton",
    description: "Daily stories, transformation posts & studio moments.",
    icon: <FaInstagram className="text-white text-lg" />,
    iconBg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400",
  },
  {
    name: "YouTube",
    handle: "Dreamland Athletics",
    href: "https://youtube.com",
    description: "Long-form tips, routines & coaching breakdowns.",
    icon: <FaYoutube className="text-white text-lg" />,
    iconBg: "bg-[#FF0000]",
  },
  {
    name: "Facebook",
    handle: "Dreamland Athletics",
    href: "https://facebook.com",
    description: "Event updates, photos & community highlights.",
    icon: <FaFacebookF className="text-white text-lg" />,
    iconBg: "bg-[#1877F2]",
  },
  {
    name: "TikTok",
    handle: "@dreamlandathletics",
    href: "https://www.tiktok.com/@dreamlandathletics?_r=1&_t=ZS-95c2QiR8uNl",
    description: "Short-form clips, workouts, and studio energy.",
    icon: <FaTiktok className="text-white text-lg" />,
    iconBg: "bg-black border border-white/20",
  },
];

export default function SocialMediaSection() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#e7b826] mb-3">
            Social Media
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Stay connected with Dreamland Athletics
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Follow our journey across social platforms for workouts,
            transformations, studio moments, events, and community updates.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-[#e7b826] transition duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`h-11 w-11 rounded-full flex items-center justify-center ${item.iconBg}`}
                >
                  {item.icon}
                </span>

                <div>
                  <p className="text-[11px] tracking-[0.25em] text-gray-300 uppercase">
                    {item.name}
                  </p>
                  <p className="font-semibold text-sm text-white">
                    {item.handle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/ContactUs"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black transition"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </section>
  );
}