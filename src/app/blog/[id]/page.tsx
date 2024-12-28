import { screenCaptureSize } from '@/lib/puppeteer.service'
import { getAllBlogPosts, getBlogPostById } from '../blog.utils'
import styles from './page.module.css'
import { BlogPost } from '@/components/blog-post/BlogPost'
import { Metadata } from 'next'

export const dynamicParams = false

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPosts()

  return blogPosts.map((blogPost) => ({
    id: blogPost.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }>}): Promise<Metadata> {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return {}

  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      // image: `https://brems.dev/api/screen-captures/blog/${blogPost.id}?size=openGraph`,
      images: [{
        url: `https://brems.dev/api/screen-captures/blog/${blogPost.id}?size=openGraph`,
        type: 'image/jpeg',
        width: screenCaptureSize.openGraph.width,
        height: screenCaptureSize.openGraph.height,
        alt: 'Screen capture of the blog post page',
      }],
      type: 'article',
      authors: ['https://brems.dev'],
      publishedTime: blogPost.created?.toISOString(),
      modifiedTime: blogPost.updated?.toISOString(),
      section: blogPost.topic,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return null

  return <BlogPost className={styles.blogPostPage} blogPost={blogPost} />
}