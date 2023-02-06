/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://profile.zlfzx.xyz',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://blog.zlfzx.xyz',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
