const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bazen.fra1.digitaloceanspaces.com"],
  },
};

module.exports = withContentlayer(nextConfig);
