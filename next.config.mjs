/** @type {import('next').NextConfig} */
// const nextConfig = {};

// next.config.js
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
}
//   module.exports = nextConfig

export default nextConfig;


