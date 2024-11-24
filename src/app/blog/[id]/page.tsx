import { getAllBlogPosts, getBlogPostById } from "../blog.utils";
import { BlogPostHeader } from '@/components/blog-post/blog-post-header/BlogPostHeader';
import styles from './page.module.css'
import { Markdown } from "@/components/markdown/Markdown";

export const dynamicParams = false

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPosts() 
 
  return blogPosts.map((blogPost) => ({
    id: blogPost.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return {}

  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      type: 'article',
      authors: [{ name: 'Jonas Brems', url: 'https://brems.dev' }],
      publishedTime: blogPost.created?.toISOString(),
      modifiedTime: blogPost.updated?.toISOString(),
      section: blogPost.topic,
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return

  return <div className={styles.blogPostPage}>
    <BlogPostHeader blogPost={blogPost} />
    <Markdown content={blogPost.content} />
  </div>
}