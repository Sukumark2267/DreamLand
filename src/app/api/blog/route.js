// app/api/blog/route.js
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
  await connectDB();
  const posts = await Blog.find().sort({ createdAt: -1 });
  return Response.json(posts);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const { title, excerpt, content } = body;

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const blog = await Blog.create({ title, excerpt, content, slug });

  return new Response(JSON.stringify(blog), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
