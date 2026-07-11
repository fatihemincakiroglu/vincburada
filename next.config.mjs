/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/sepetli-vinc/modeller',
        destination: '/sepetli-vinc',
        permanent: true,
      },
      {
        source: '/sepetli-vinc/modeller/:handle',
        destination: '/sepetli-vinc/:handle',
        permanent: true,
      },
    ]
  },
  images: {
    minimumCacheTTL: 2678400 * 6, // 3 months
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vinc.net',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
}

export default nextConfig
