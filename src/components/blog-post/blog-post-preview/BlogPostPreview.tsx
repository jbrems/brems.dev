import { BlogPost } from '@/app/blog/blog.types'
import styles from './BlogPostPreview.module.css'

export function BlogPostPreview({ blogPost, children }: { blogPost: BlogPost, children?: React.ReactNode }) {
  return <article className={styles.blogPostPreview}>
    <h1>{blogPost.title}</h1>
    <p className={styles.metadata}>
      {blogPost.topic && <span>[{blogPost.topic}]</span>}
      <span>{blogPost.date?.toISOString().split('T')[0]}</span>
      <span>by Jonas Brems</span>
    </p>
    {children}
  </article>
}