import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

import { getAllBlogPosts, getBlogPostById } from "../blog.utils";
import { BlogPostPreview } from '@/components/blog-post/blog-post-preview/BlogPostPreview';
import styles from './page.module.css'
import { BackButton } from '@/components/navigation/back-button/BackButton'

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

  const htmlVFile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(blogPost.content)

  const htmlContent = htmlVFile.toString()

  return <div style={{ marginTop: '1em' }} className={styles.blogPostPage}>
    <BlogPostPreview blogPost={blogPost} />
    <article dangerouslySetInnerHTML={{ __html: htmlContent }} className={styles.content} />
  </div>
}