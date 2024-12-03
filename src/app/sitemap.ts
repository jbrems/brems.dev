import { MetadataRoute } from "next";
import { getAllBlogPosts } from "./blog/blog.utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllBlogPosts()
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
      url: 'https://brems.dev/projects/presentr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://brems.dev/career',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://brems.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...blogPosts.map(blogPost => ({
      url: `https://brems.dev/blog/${blogPost.id}`,
      lastModified: blogPost.updated,
      changeFrequency: 'yearly' as MetadataRoute.Sitemap[0]['changeFrequency'],
      priority: 0.8,
    })),
  ]
}