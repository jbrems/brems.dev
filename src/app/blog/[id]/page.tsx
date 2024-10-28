import { remark } from 'remark'
import remarkHtml from 'remark-html'

import { getBlogPostById, parseFileId, readAllBlogPostFiles } from "../blog.utils";
import { BlogPostPreview } from '@/components/blog-post/blog-post-preview/BlogPostPreview';

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

  const htmlContent = (await remark().use(remarkHtml).process(blogPost.content)).toString()
  
  return <div style={{ marginTop: '1em' }}>
    <BlogPostPreview blogPost={blogPost}>
      <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </BlogPostPreview>
  </div>
}