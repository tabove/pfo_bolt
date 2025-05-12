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
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.openbadge-global.com',
        pathname: '/api/v1/image/**',
      }
    ]
  },
  // スクロール位置の復元を無効化
  experimental: {
    scrollRestoration: false
  }
};

module.exports = nextConfig;