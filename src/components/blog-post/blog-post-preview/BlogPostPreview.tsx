import { BlogPost } from '@/app/blog/blog.types'
import styles from './BlogPostPreview.module.css'

export function BlogPostPreview({ blogPost }: { blogPost: BlogPost, children?: React.ReactNode }) {
  return <article className={styles.blogPostPreview}>
    <div className={styles.cover}>
      <span>{blogPost.topic}</span>
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>{blogPost.title}</h1>
      <p className={styles.metadata}>
        <span>last modified at {blogPost.updated?.toISOString().split('T')[0]}</span>
        <span>by Jonas Brems</span>
      </p>
    </div>
  </article>
}