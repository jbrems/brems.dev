import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, 'chrome-aws-lambda']
    return config
  },
}

export default nextConfig
