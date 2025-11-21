// components/MembershipSection.jsx
"use client";

import React from "react";
import "./membership.css";

// Icons
import { Dumbbell, Crown, Trophy } from "lucide-react";

const membershipPlans = [
  {
    name: "YODHA",
    icon: <Dumbbell size={22} className="text-[#e7b826]" />,
    duration: "1 Month Membership",
    price: 99,
    features: [
      "Full studio access",
      "Unlimited workouts",
      "Locker room access",
      "Ideal for beginners",
    ],
    isPopular: false,
  },
  {
    name: "VEER",
    icon: <Crown size={22} className="text-[#e7b826]" />,
    duration: "3 Months Membership",
    price: 149,
    features: [
      "Full studio access",
      "Unlimited workouts",
      "Progress tracking",
      "Great for consistency",
    ],
    isPopular: true, // MOST POPULAR
  },
  {
    name: "MAHAVEER",
    icon: <Trophy size={22} className="text-[#e7b826]" />,
    duration: "1 Year Membership",
    price: 999,
    features: [
      "Full studio access",
      "Unlimited workouts",
      "Priority support",
      "Best value for long-term members",
    ],
    isPopular: false,
  },
];

const MembershipSection = () => {
  return (
    <section
      id="memberships"
      className="w-full bg-black text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#e7b826] mb-2">
            Memberships
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            Studio Membership (Online Purchase)
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Choose a plan that fits your journey. All prices shown are{" "}
            <span className="text-[#e7b826] font-semibold">+ HST</span>.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border px-6 pt-10 pb-8 flex flex-col h-full 
              bg-gradient-to-b from-white/10 via-white/5 to-black/80 
              backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.75)]
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85)]
              ${
                plan.isPopular
                  ? "border-[#e7b826] shadow-[0_0_50px_rgba(231,184,38,0.45)]"
                  : "border-white/10"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e7b826] text-black text-[10px] font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
                  Most Popular
                </div>
              )}

              {/* Plan Title + Icon */}
              <div className="flex items-center gap-2 mb-1">
                {plan.icon}
                <h3 className="text-xl md:text-2xl font-bold tracking-[0.22em] uppercase">
                  {plan.name}
                </h3>
              </div>

              {/* Duration */}
              <p className="text-xs md:text-sm text-gray-300 tracking-wide mb-4 uppercase">
                {plan.duration}
              </p>

              {/* Price */}
              <div className="mb-5">
                <span className="text-3xl font-bold text-[#e7b826]">
                  ${plan.price}
                </span>
                <span className="text-sm text-gray-300"> + HST</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-100 mb-6 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[6px] h-[5px] w-[5px] rounded-full bg-[#e7b826]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

           <button className="dl-btn-primary w-full py-3 rounded-lg text-sm uppercase tracking-wide">
  PURCHASE NOW
</button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
