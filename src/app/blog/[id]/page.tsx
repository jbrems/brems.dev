import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

import { getBlogPostById, parseFileId, readAllBlogPostFiles } from "../blog.utils";
import { BlogPostPreview } from '@/components/blog-post/blog-post-preview/BlogPostPreview';
import styles from './page.module.css'

export const dynamicParams = false

export async function generateStaticParams() {
  const entries = await readAllBlogPostFiles() 
 
  return entries.map((entry) => ({
    id: parseFileId(entry),
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
      publishedTime: blogPost.date?.toISOString(),
      section: blogPost.topic,
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return

  const highlightedHtmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(blogPost.content)

  return <div style={{ marginTop: '1em' }} className={styles.blogPostPage}>
    <BlogPostPreview blogPost={blogPost}>
      <p dangerouslySetInnerHTML={{ __html: highlightedHtmlContent.toString() }} className={styles.content}/>
    </BlogPostPreview>
  </div>
}