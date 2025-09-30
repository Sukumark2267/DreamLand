'use client';
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sessions = [
    { title: 'BRONZE', description: '12 GROUP FITNESS SESSION', price: '$280' },
    { title: 'SILVER', description: '16 GROUP FITNESS SESSION', price: '$320' },
    { title: 'GOLD', description: 'UNLIMITED GROUP FITNESS SESSION', price: '$350' },
  ];
  

export default function GroupService() {
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  gsap.fromTo(
    ".grid-item",
    {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    }
  );

  // Optional: Clean up scroll triggers on unmount
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % aboutcontent.length;
    setCurrentIndex(nextIndex);

    gsap.fromTo(
      ".grid",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  };

 
  return (
    <>
      <div className="group-service bg-[#e7b826] text-center text-[#000] text-3xl font-bold p-2">
        <h1>Group Service</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 pt-8 pr-8">
      {sessions.map((session, index) => (
        <div
          key={index}
          className="grid-item bg-black text-white rounded-lg shadow-lg overflow-hidden border border-[#ffd700]"
        >
          <div className="bg-[#ffd700] text-black font-bold text-center py-2 text-md">
          <h1>{session.title}</h1>
          </div>
          <div className="flex flex-col items-center justify-center py-6 space-y-2">
            <div className="text-white text-center text-sm tracking-wide">
              ✦ {session.description}<br/>
              ✦ {session.description}<br/>
              ✦ {session.description}<br/>
            </div>
            <button className="mt-2 bg-[#ffd700] text-black px-4 py-2 rounded-md font-semibold border-2 border-transparent hover:cursor-pointer hover:bg-black hover:text-[#ffd700] hover:border-2 hover:border-[#ffd700] transition duration-300">
            {session.price}
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  ); 
}
  