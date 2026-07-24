/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // REQUIRED FOR GITHUB PAGES: Tell Next.js to generate static HTML into an "out" folder
  output: "export",
  
  // REQUIRED FOR GITHUB PAGES: Next.js server-side image optimization doesn't work on static hosts
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
