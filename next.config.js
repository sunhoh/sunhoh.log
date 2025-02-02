const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = withContentlayer(nextConfig);
