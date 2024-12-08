import { BlogPost } from '@/app/blog/blog.types'
import styles from './BlogPostHeader.module.css'
import BlogPostCover from '../blog-post-cover/BlogPostCover'

export function BlogPostHeader({ blogPost, className }: { blogPost: BlogPost, className?: string }) {
  return <header className={`${styles.blogPostHeader} ${className}`}>
    <BlogPostCover blogPost={blogPost} />
    <div className={styles.info}>
      <h1 className={styles.title}>{blogPost.title}</h1>
      <p className={styles.metadata}>
        <span>last modified at {blogPost.updated?.toISOString().split('T')[0]}</span>
        <span>by Jonas Brems</span>
      </p>
    </div>
  </header>
}