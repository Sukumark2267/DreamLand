//src\app\Blogs\[slug].js\page.js
import React from 'react';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import './Blogs.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default async function BlogPage({ params }) {
  await connectDB();

  const blog = await Blog.findOne({ slug: params.slug });

  if (!blog) return <div className="p-10 text-red-600">Blog not found</div>;

  return (
    <>
    <Navbar/>
    <div className="blog-container">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-excerpt">{blog.excerpt}</p>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
    <Footer/>
    </>
  );
}
