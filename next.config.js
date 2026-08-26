/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  devIndicators: false,
  images: {
    domains: ['i.pinimg.com'],
  },
}

module.exports = nextConfig