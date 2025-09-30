'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import './NewBlogPost.css';

export default function NewBlogPost() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
  });

  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatusMessage({ text: '✅ Blog posted successfully!', type: 'success' });
      setTimeout(() => {
        router.push('/Blogs');
      }, 1500);
    } else {
      setStatusMessage({ text: '❌ Failed to post blog. Please try again.', type: 'error' });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="new-blog-container w-full max-w-xl">
        <h1 className="new-blog-title mb-4 text-3xl font-bold text-white">New Blog Post</h1>

        {/* Status Message Block */}
        {statusMessage.text && (
          <div
            className={`mb-4 px-4 py-3 rounded-md text-sm font-medium ${
              statusMessage.type === 'success'
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="new-blog-form space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="excerpt"
            placeholder="Excerpt"
            value={form.excerpt}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Full content"
            rows={6}
            value={form.content}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transition">
            Post Blog
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
