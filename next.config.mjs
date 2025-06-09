/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "cdn.easyfrontend.com",
      },
    ],
  },
};

export default nextConfig;
