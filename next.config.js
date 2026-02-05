/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;
