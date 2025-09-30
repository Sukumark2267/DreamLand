"use client";
import Image from "next/image";
import './Services.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'; 
import ServiceChart from '@/components/membership';
// import MembershipSection from '@/components/membership';
import GroupService from '@/components/GroupService';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic';

const SpecialPrograms = dynamic(() => import('@/components/SpecialPrograms'), {
  ssr: false,
});
import { TextHoverEffect } from "@/components/ui/text-hover-effect";



export default function Services() {
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
         <Navbar />
         <section className="Services">
         <div className="Servicessection1 items-center flex justify-center">
         <div className="h-[6rem] sm:h-[8rem] md:h-[11rem] lg:h-[15rem] xl:h-[20rem]  2xl:h-[25rem] w-full">
         <TextHoverEffect className="about-us-text font-bold" text="SERVICES" />

         {/* <TextHoverEffect h1>ABOUT US</h1> */}
         </div>
         </div>
         <ServiceChart />
         <GroupService />
         <SpecialPrograms />
         <Footer />
          </section>
    </>
  );
}
