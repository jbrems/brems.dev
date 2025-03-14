import styles from './BlogPostList.module.css'
import { BlogPost } from '@/app/blog/blog.types'
import { LinkToBlogPost } from '../link-to-blog-post/LinkToBlogPost'

export function BlogPostList({ blogPosts }: { blogPosts: BlogPost[] }) {
  return <ul className={styles.blogPostList}>
    {blogPosts.map(blogPost => <li key={blogPost.id} data-topic={blogPost.topic} data-search-content={`${blogPost.topic} ${blogPost.title}`}><LinkToBlogPost blogPost={blogPost} /></li>)}
  </ul>
}