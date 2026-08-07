/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages
  output: "export",

  // Required if you use next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
