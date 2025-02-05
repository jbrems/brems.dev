import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/nrg', destination: '/projects/national-registration-generation', permanent: true },
      { source: '/tools', destination: '/projects/base64-encoder', permanent: false },
    ]
  },
}

export default nextConfig
