'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './herosection.css';


export default function HeroTextContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero-content" data-aos="fade-right" data-aos-delay="200" data-aos-duration="700" data-aos-easing="ease-in-out" >
      <h2>UNLEASH YOUR POTENTIAL</h2>
      <p>
        Brampton&rsquo;s premier fitness community where athletes are made. Join the movement
        that&rsquo;s transforming lives through strength, discipline, and community.
      </p>
      <button data-aos="fade-right" data-aos-delay="800" data-aos-duration="700" data-aos-easing="ease-in-out" className="cta-button">Start Your Journey Today</button>
    </div>
  );
}
