"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="landing-page bg-black text-white">
      <style jsx>{`
        @keyframes wordRevealLeft {
          0% {
            opacity: 0;
            transform: translateX(-22px) translateY(10px);
            filter: blur(8px);
          }
          20% {
            opacity: 1;
            transform: translateX(0) translateY(0);
            filter: blur(0);
          }
          80% {
            opacity: 1;
            transform: translateX(8px) translateY(0);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes wordRevealRight {
          0% {
            opacity: 0;
            transform: translateX(22px) translateY(10px);
            filter: blur(8px);
          }
          20% {
            opacity: 1;
            transform: translateX(0) translateY(0);
            filter: blur(0);
          }
          80% {
            opacity: 1;
            transform: translateX(-8px) translateY(0);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes softFadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .fade-up {
          animation: softFadeUp 1s ease-out forwards;
        }

        .slow-word {
          display: inline-block;
          animation: wordRevealLeft 4.8s ease-in-out infinite;
          will-change: transform, opacity, filter;
        }

        .steady-word {
          display: inline-block;
          animation: wordRevealRight 4.8s ease-in-out infinite;
          animation-delay: 0.55s;
          will-change: transform, opacity, filter;
        }
      `}</style>

      <section className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fitness_2.jpeg"
            alt="Dreamland Athletics Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black/72" />

        <div className="relative z-20 mx-auto h-full max-w-7xl px-6 flex flex-col items-center justify-center text-center -translate-y-6 md:-translate-y-8">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Dreamland Athletics Gym"
            width={220}
            height={220}
            className="w-16 md:w-20 lg:w-24 h-auto object-contain rounded-xl mb-5 fade-up"
            priority
          />

          <div className="w-full flex flex-col items-center text-center">
            <h1
              className="m-0 mb-4 fade-up"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(2.4rem, 4vw, 4.8rem)",
                fontWeight: 400,
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#ffffff",
                textShadow: "0 0 18px rgba(0,0,0,0.45)",
              }}
            >
              Be A Turtle
            </h1>

            <div
              className="mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(2.5rem, 4.2vw, 5rem)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                textShadow:
                  "0 6px 30px rgba(255,255,255,0.14), 0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              <span className="slow-word">SLOW</span>
              <span style={{ display: "inline-block", width: "0.8em" }} />
              <span className="steady-word">STEADY</span>
            </div>

            <h1
              className="m-0 fade-up"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(2.5rem, 4.2vw, 5rem)",
                fontWeight: 600,
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                textShadow: "0 0 18px rgba(0,0,0,0.45)",
                animationDelay: "0.35s",
              }}
            >
               UNSTOPPABLE
            </h1>
          </div>

          <div className="mt-8 fade-up" style={{ animationDelay: "0.5s" }}>
            <Link
              href="#memberships"
              className="bg-black text-[#e7b826] border border-[#e7b826] font-semibold py-3 px-10 rounded-2xl transition duration-300 text-sm md:text-base uppercase tracking-wide hover:bg-[#e7b826] hover:text-black hover:scale-105"
            >
              View Memberships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}