/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;