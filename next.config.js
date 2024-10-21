/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://picsum.photos',
        port: '443',
      },
    ],
    domains: ['localhost', 'minio'],
  },
};

module.exports = withNextIntl(nextConfig);
