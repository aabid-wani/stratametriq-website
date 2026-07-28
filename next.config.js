/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Fix 404 errors on static hosts (like GitHub Pages) by exporting /page/index.html instead of /page.html
  trailingSlash: true,
  
  // REQUIRED FOR GITHUB PAGES: Tell Next.js to generate static HTML into an "out" folder
  output: "export",
  
  // REQUIRED FOR GITHUB PAGES: Next.js server-side image optimization doesn't work on static hosts
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
