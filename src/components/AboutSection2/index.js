import React, { useState } from "react";
import gsap from "gsap";
import "./AboutSection2.css";

const aboutcontent = [
  {
    id: 1,
    title: "Welcome to Dreamland Athletics",
    content:
    "At Dreamland Athletics, we are more than just a gym,we are a community built on growth, support, and transformation.Our mission is to help you become stronger, healthier, and more confident through personalized coaching, proper movement, and sustainable habits that fit your lifestyle. We believe fitness is not just about workouts, but about building a mindset that carries into your everyday life.No matter your starting point or goal, you’ll find guidance, accountability, and a positive environment that motivates you to keep improving. We celebrate every win big or small, and push each other to be better every day.Welcome to Dreamland, where your journey becomes our mission.",
    image: "/images/elements/dl_s1.jpg"
  },
  {
    id: 2,
    title: "Our Founders",
    content:
    "Dreamland Athletics was founded by a group of former professional athletes and visionary coaches who saw the need for a more holistic approach to athletic development. Drawing from years of competitive experience, they crafted a training model that emphasizes discipline, mental strength, and community. Their mission was simple: to create a safe, inclusive, and inspiring environment for athletes to grow. Today, their legacy lives on in every drill, every class, and every milestone reached by our members.",
    image: "/images/elements/dl_s2.jpg"
  },
  {
    id: 3,
    title: "Our Vision",
    content:
    "We envision a world where access to high-quality athletic training is not a privilege, but a right. Our goal is to break down barriers—economic, social, or geographic—that limit athletic potential. We are committed to developing future leaders who understand the value of teamwork, perseverance, and integrity. By partnering with local communities and global organizations, we extend our vision beyond sport to impact lives in meaningful, lasting ways. Sport is our tool, but change is our purpose.",
    image: "/images/elements/dl_s3.png"
  },
  {
    id: 4,
    title: "Our Mission",
    content:
    "Our mission is to inspire excellence through sport while promoting values that transcend the playing field. We are more than a training center—we are a movement that empowers people to embrace their strengths, overcome obstacles, and strive for greatness in all aspects of life. Every program we offer is designed to build character as much as skill. We aim to shape individuals who carry the lessons of dedication, respect, and resilience into their families, schools, and careers.",
    image: "/images/elements/dl_s4.png"
  }
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % aboutcontent.length;
    setCurrentIndex(nextIndex);

    gsap.fromTo(
      ".about-heading, .about-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  };

 
    return (
      <>
      
      <div className="AboutSection2 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 py-12 gap-10">
        {/* Left: Text Section */}
        <div className="flex-1">
          <h1 className="about-heading text-4xl font-bold mb-6">
            {aboutcontent[currentIndex].title}
          </h1>
          <p className="about-text text-lg leading-relaxed mb-6">
            {aboutcontent[currentIndex].content}
          </p>
          <button
            onClick={handleClick}
            className="more-button px-6 py-3 rounded-xl transition"
          >
            Next
          </button>
        </div>
  
        {/* Right: Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={aboutcontent[currentIndex].image}
            alt="About Visual"
            className="max-w-2/3 lg:max-w-2/3 md:max-w-2/2 h-auto object-contain rounded-lg shadow-md"
          />
        </div>

      </div>
      </>
    );
  }
  