import { BlogPost } from '@/app/blog/blog.types'
import styles from './BlogPostPreview.module.css'
import { SttpTag } from '../sttp-tag/SttpTag'

export function BlogPostPreview({ blogPost, className }: { blogPost: BlogPost, className?: string }) {
  return <div className={`${styles.blogPostPreview} ${className}`}>
    <div className={styles.cover}>
      <span className={styles.topic}>{blogPost.topic}</span>
      {blogPost.sttp && <SttpTag className={styles.sttpTag} />}
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>{blogPost.title}</h1>
      <p className={styles.metadata}>
        <span>last modified at {blogPost.updated?.toISOString().split('T')[0]}</span>
        <span>by Jonas Brems</span>
      </p>
    </div>
  </div>
}