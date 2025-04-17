/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.openbadge-global.com',
      }
    ]
  },
  // スクロール位置の復元を無効化
  experimental: {
    scrollRestoration: false
  }
};

module.exports = nextConfig;