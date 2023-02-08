/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    domains: ['www.nikolasdev.com']
  }
}

module.exports = nextConfig
