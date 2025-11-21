"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SplitType from "split-type";
import gsap from "gsap";
import InstagramFeed from "../instagram";
import FounderSocials from "../FounderSocials";
import { thumbnails } from "@/data/thumbs";

const newsletterSchema = z.object({
  fname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ComingSoon() {
  const headingRef = useRef(null);
  let [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fname: "", email: "" });
  const [rowCount, setRowCount] = useState(6); // Default to desktop

  // Responsive row count for background collage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRowCount(10); // Mobile: more rows
      } else {
        setRowCount(6); // Desktop: fewer rows
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fname = form.fname;
    const email = form.email;

    const result = newsletterSchema.safeParse({ fname, email });
    if (!result.success) {
      console.log(result.error);
      toast.error("Something went wrong.", {
        description: result.error.issues[0].message,
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, email }),
      });

      if (res.ok) {
        toast.success("Thank you for signing up!");
        setForm({ fname: "", email: "" });
      } else {
        toast.error("There was an error. Please try again.");
      }
    } catch (error) {
      toast.error("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        {/* Background Collage */}
        <div className="absolute inset-0 z-0 flex flex-col space-y-1 overflow-hidden">
          {[...Array(rowCount)].map((_, rowIndex) => {
            const rowImages = [...shuffle(thumbnails), ...shuffle(thumbnails)];
            return (
              <div
                key={rowIndex}
                className={`flex whitespace-nowrap ${
                  rowIndex % 2 === 0
                    ? "animate-scroll-ltr"
                    : "animate-scroll-rtl"
                }`}
              >
                {rowImages.map((src, idx) => (
                  <img
                    key={`${rowIndex}-${idx}`}
                    src={src}
                    alt={`Thumb ${idx}`}
                    className="aspect-[2/1] w-80 md:w-60 xl:w-80 object-cover mx-[2px] rounded"
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 z-10 bg-black/70" />

        {/* Hero Content – anchored near first row */}
        <div className="absolute inset-x-0 top-0 md:top-1 lg:top-9 z-20 flex flex-col items-center px-4 text-center">
          {/* Logo */}
          <Image
            src="/images/logo/logo-primary.png"
            alt="Dreamland Athletics Gym"
            width={220}
            height={220}
            className="w-20 md:w-28 lg:w-32 h-auto object-contain rounded-xl mb-3"
            priority
          />

          {/* Line 1: BEST STUDIO IN BRAMPTON, ONTARIO */}
         <h1
  className="font-gothic text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-1"
>
  BEST STUDIO IN{" "}
  <span className="text-[#e7b826]">BRAMPTON, ONTARIO</span>
</h1>


          {/* Line 2: CANADIAN FITNESS BRAND HIGHLY FOCUSED ON */}
          <p className="font-swiss text-gray-200 text-xs md:text-sm lg:text-base tracking-[0.12em] mb-2">
             CANADIAN FITNESS BRAND HIGHLY FOCUSED ON
          </p>


          {/* Subline: Community, Transformation, Results */}
         <p className="font-swiss text-gray-300 text-xs md:text-sm lg:text-base tracking-[0.10em] mb-4 uppercase opacity-90">
         Community <span className="text-[#e7b826]">•</span> Transformation <span className="text-[#e7b826]">•</span> Results
          </p>


          {/* Line 3: BE A TURTLE – SLOW. STEADY. UNSTOPPABLE. */}
             <h2
  className="font-octin text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 tracking-[0.15em]"
  style={{
    textShadow: "0 0 25px rgba(0,0,0,0.85)",
  }}
>
  <span className="text-[#e7b826]">BE A TURTLE</span>
  <span className="text-white"> – SLOW</span>
  <span className="text-[#ff7a00]">.</span>
  <span className="text-[#ff7a00]"> STEADY</span>
  <span className="text-[#ff3b30]">.</span>
  <span className="text-[#ff3b30]"> UNSTOPPABLE</span>
  <span className="text-[#e7b826]">.</span>
</h2>



      <p
  className="font-swiss text-gray-300 text-xs md:text-sm lg:text-base max-w-xl leading-relaxed tracking-[0.05em] mb-5 opacity-90"
>
  Private, highly focused training studio for serious people who believe in slow,
  steady, unstoppable progress.
</p>


          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
           <Link
  href="#memberships"
  className="dl-btn-primary py-2 px-6 md:py-2.5 md:px-8 rounded-lg text-xs md:text-sm uppercase tracking-wide"
>
  View Memberships
</Link>


     <Link
  href="/#free-pass"
  className="hidden lg:inline-flex dl-btn-primary px-5 py-2 rounded-sm text-sm font-bold"
>
  FREE PASS
</Link>


          </div>
        </div>
      </section>

      {/* Optional: you can re-enable these later if needed */}
      {/* <InstagramFeed />
      <FounderSocials /> */}
    </div>
  );
}
