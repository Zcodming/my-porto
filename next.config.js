// const autoprefixer = require('autoprefixer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    path: '/_next/image',
    unoptimized: true,
  },
  // basePath: "/nextjs-pages",
  // assetPrefix: "/nextjs-pages",
}

module.exports = nextConfig
