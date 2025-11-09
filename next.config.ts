import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'tsx'],
  async redirects() {
    return [
      { source: '/nrg', destination: '/projects/national-registration-generation', permanent: true },
      { source: '/tools', destination: '/projects/base64-encoder', permanent: false },
    ]
  },
}

const withMDX = createMDX(({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'matter' }],
    ],
    rehypePlugins: ['rehype-highlight'],
  }
}) as any)

export default withMDX(nextConfig)
