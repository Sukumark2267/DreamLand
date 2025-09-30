'use client';
import React from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Nutritionist() {
    return (
<div className='nutritionist flex flex-col lg:flex-row items-center justify-center bg-black w-full'>
  {/* Left Section */}
  <div className='nutritionist-content flex items-center justify-center bg-black h-auto md:h-full w-full md:w-2/4 lg:w-1/3'>
    <Image src='/images/elements/nutrionist.png' alt='Nutritionist' width={494} height={505} />
  </div>

  {/* Right Section */}
  <div className='nutritionist-content bg-black h-auto md:h-full w-full md:w-full lg:w-2/3 p-6 md:pt-20 sm:pt-5'>
    <div className='flex flex-col'><h1 className='text-[#ffd700] text-4xl font-bold mb-4'>Nutritionist</h1>
    <p className='text-white w-full text-lg md:text-xl'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </p>
    </div>
    <button className='cta-button bg-[#ffd700] text-black font-bold mt-4 px-4 py-2 rounded-md'>
      Book a Call
    </button>
  </div>
</div>


    );
}