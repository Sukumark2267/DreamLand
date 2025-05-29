// components/StyledSection.tsx

import Image from 'next/image';
import './AboutSection2.css';
export default function StyledSection() {
  return (
    <div className="AboutSection2 relative p-10  text-white font-sans border">
      <div className="grid grid-cols-2 gap-6 items-start">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-center">Heading</h1>
          <div className="grid grid-cols-6 gap-3 text-xl font-bold">
            {Array.from({ length: 36 }, (_, i) => (
              <span key={i}>text</span>
            ))}
          </div>
        </div>

        {/* Right Section - Picture */}
        <div className="relative w-full flex justify-center">
          <div className="w-[220px] h-[300px] bg-black flex items-center justify-center text-white text-xl font-bold z-10">
            PICTURE
          </div>
          <div className="absolute top-3 left-3 w-[220px] h-[300px] border-4 border-black z-0"></div>
        </div>
      </div>

      {/* Decorative Scrollbar */}
      <div className="mt-10 flex items-center gap-4">
        {/* Dumbbell Icon */}
        <Image src="/dumbbell.png" alt="dumbbell" width={50} height={50} />
        <div className="flex-grow h-3 bg-black rounded-full"></div>
      </div>
      <p className="mt-2 text-xl font-bold">Scroll bar for heading1, h2, h3, h4</p>
    </div>
  );
}
