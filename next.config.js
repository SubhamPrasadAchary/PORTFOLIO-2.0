/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'dist',
  basePath: '/PORTFOLIO-2.0',
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/config': path.resolve(__dirname, 'config'),
      '@/app': path.resolve(__dirname, 'app')
    };
    return config;
  },
};

module.exports = nextConfig;
