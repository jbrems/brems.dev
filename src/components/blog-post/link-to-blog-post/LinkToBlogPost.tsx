import Link from 'next/link'
import { BlogPost } from '@/app/blog/blog.types'
import { BlogPostHeader } from '../blog-post-header/BlogPostHeader'
import styles from './LinkToBlogPost.module.css'

export function LinkToBlogPost({ blogPost }: { blogPost: BlogPost }) {
  return <Link href={blogPost.href || `/blog/${blogPost.id}`} className={styles.linkToBlogPost}>
    <BlogPostHeader blogPost={blogPost} className={styles.blogPost} />
  </Link>
}