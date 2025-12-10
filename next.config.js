/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'dist',
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
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
