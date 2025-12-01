import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://brems.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://brems.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://brems.dev/articles',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // ...blogPosts.map(blogPost => ({
    //   url: `https://brems.dev/blog/${blogPost.id}`,
    //   lastModified: blogPost.updated,
    //   changeFrequency: 'yearly' as MetadataRoute.Sitemap[0]['changeFrequency'],
    //   priority: 0.8,
    // })),
  ]
}