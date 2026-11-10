/** @type {import('next').NextConfig} */
// Served at https://labs.codeillustrated.com. It used to live at
// codeillustrated.com/labs (basePath "/labs"); the Academy site redirects
// those old links here.
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // For Next.js 16.x compatibility
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
