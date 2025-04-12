/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['apod.nasa.gov', 'www.youtube.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    NEXT_PUBLIC_NASA_API_KEY: process.env.NEXT_PUBLIC_NASA_API_KEY,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig;
