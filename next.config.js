/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '/labs',
  assetPrefix: '/labs',
  images: {
    path: '/labs/_next/image',
  },
  // For Next.js 16.x compatibility
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
