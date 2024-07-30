import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
    images: {
        domains: ["picsum.photos"]
    }
}
export default withContentlayer(nextConfig)