const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    images: {
        domains: ["picsum.photos"]
    }
}
module.exports = withContentlayer(nextConfig);