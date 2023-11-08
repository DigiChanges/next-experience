/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://picsum.photos',
        port: '443',
      },
    ],
  },
}

module.exports = nextConfig
