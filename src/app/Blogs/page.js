'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import './BlogList.css';

export default function BlogList() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch('/api/blog')
        .then((res) => res.json())
        .then(setPosts);
    }, []);
  
    return (
      <>
      <Navbar/>
        <div className='blog-bg'>
          <div className="blog-list-container">
            <h1 className="blog-list-title">Blogs by Dreamland Athletics</h1>
            {posts.map((post) => (
              <Link key={post._id} href={`/Blogs/${post.slug}`} className="blog-link-wrapper">
                <div className="blog-item">
                  <h2 className="blog-link">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer/>
        </>
      );
}
  
