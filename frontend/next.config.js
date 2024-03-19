/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
  env: {
    PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID
  }
}

module.exports = nextConfig
