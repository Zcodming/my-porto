// const autoprefixer = require('autoprefixer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/public",
  },
  // basePath: "/nextjs-pages",
  // assetPrefix: "/nextjs-pages",
}

module.exports = nextConfig
