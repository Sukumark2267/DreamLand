"use client";

import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/screenthreeimages/1.jpeg",
    alt: "Dreamland Athletics premium training floor",
    className: "md:col-span-2 md:row-span-2 h-[260px] md:h-[560px]",
  },
  {
    src: "/screenthreeimages/2.jpeg",
    alt: "Dreamland Athletics outdoor wellness session",
    className: "md:col-span-1 md:row-span-2 h-[260px] md:h-[560px]",
  },
  {
    src: "/screenthreeimages/4.jpeg",
    alt: "Dreamland Athletics strength zone",
    className: "h-[220px] md:h-[260px]",
  },
  {
    src: "/screenthreeimages/8.jpeg",
    alt: "Dreamland Athletics premium equipment area",
    className: "h-[220px] md:h-[260px]",
  },
  {
    src: "/screenthreeimages/9.jpeg",
    alt: "Dreamland Athletics lifestyle and recreation space",
    className: "h-[220px] md:h-[260px]",
  },
];

function GalleryCard({ src, alt, className }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
    </div>
  );
}

export default function StudioGallerySection() {
  return (
    <section className="relative bg-black text-white py-20 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* top content */}
        {/* <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#e7b826] mb-3">
              Studio Experience
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              A space built for focus, strength and transformation.
            </h2>

            <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-xl">
              From premium strength areas to functional training and community
              wellness sessions, Dreamland Athletics is designed to help members
              train with purpose in a refined, motivating environment.
            </p>
          </div>

          <div>
            <Link
              href="/Gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div> */}

        {/* premium editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-auto">
          {images.map((image) => (
            <GalleryCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}