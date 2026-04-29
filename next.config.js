/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['pdf-parse', 'mammoth'],
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
