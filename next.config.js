const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pub-882c97579adf411598b8e40c33598bf4.r2.dev"],
  },
};

module.exports = withContentlayer(nextConfig);
