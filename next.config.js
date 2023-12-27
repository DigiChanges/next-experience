/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://picsum.photos',
        port: '443'
      }
    ]
  }
};

module.exports = withNextIntl(nextConfig);
