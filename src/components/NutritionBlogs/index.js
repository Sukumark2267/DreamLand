'use client';

import Image from 'next/image';
import './NutritionFlow.css';
import { useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NutritionFlow() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to fetch blogs:', err));
  }, []);

  useLayoutEffect(() => {
    if (blogs.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from('.blog-post', {
        scale: 0.7,
        opacity: 0,
        duration: 2.2,
        ease: 'power3.out',
        stagger: 0.75,
        scrollTrigger: {
          trigger: '.NutritionFlow',
          start: 'top 65%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
          scrub: true,
          markers: false,
        },
      });
    });

    return () => ctx.revert(); 
  }, [blogs]);

  return (
    <>
<section className="NutritionFlow" id="NutritionFlow">
  <div className="blog-container-comp">
    {blogs.map((blog, idx) => (
      <a
        href={`/Blogs/${blog.slug}`}
        key={blog.slug || idx}
        className="blog-post group"
      >
        <Image
          src="/images/elements/D.png"
          alt={blog.title}
          width={400}
          height={300}
          className="blog-image"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
        <h3 className="blog-title group-hover:underline">{blog.title}</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <span className="read-more">Read More →</span>
      </a>
    ))}
  </div>
</section>


      <div
        className="dividerborder relative w-11/10 h-10 mt-[-1px] bg-[var(--dark-bg)]"
        id="dividerborder"
      >
        <Image
          src="/images/elements/BORDER-Horizontal.png"
          alt="Section Divider Border"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </>
  );
}
