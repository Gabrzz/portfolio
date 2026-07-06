/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ideal for static exports or deployment flexibility
  },
};

export default nextConfig;
