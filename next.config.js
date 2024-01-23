/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    serverActions: true,

    sassOptions: {
      includePaths: [path.resolve(__dirname, 'stylesheets')],
    },
  },
}

module.exports = nextConfig
