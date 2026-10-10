"use client";
import Image from "next/image";
import './AboutUs.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Footer from '@/components/footer';
import StudioTimings from '@/components/StudioTimings';
import AboutSection2 from '@/components/AboutSection2';
import GalleryCarousel from '@/components/GalleryCarousel';
import Newsletter from '@/components/Newsletter';
import Preloader from '@/components/Preloader';



export default function About() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <>

         <section className="AboutUs">
         <div className="relative grid min-h-[360px] items-center overflow-hidden bg-[#f5f1e7] md:grid-cols-2">
           <div className="p-8 md:p-16 text-black">
             <p className="mb-3 text-sm tracking-[0.25em] uppercase text-[#80620c]">Canada & India</p>
             <h1 className="text-4xl md:text-6xl uppercase">One passion. Two communities.</h1>
             <p className="mt-5 max-w-lg font-sans text-lg text-neutral-700">Train with purpose. Grow with a community that supports every step of your journey.</p>
           </div>
           <div className="relative h-72 md:h-[440px]">
             <Image src="/screenthreeimages/2.jpeg" alt="Dreamland Athletics community training" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
           </div>
         </div>
         {/* <AboutCards />    */}
         <AboutSection2 />
         <StudioTimings />
         <GalleryCarousel />
         <Newsletter />
         {/* <Footer /> */}
          </section>
    </>
  );
}
