import styles from './page.module.css'
import { BlogPostList } from '@/components/blog-post/blog-post-list/BlogPostList'
import { getAllBlogPosts, sortBlogPosts } from './blog/blog.utils'
import Link from 'next/link'
import { DeLijnBlock } from './career/DeLijnBlock'

export const metadata = {
  title: '<Home /> | Brems.dev',
  description: 'Jonas Brems - Web developer. My very own place on the world wide web.',
}

export default async function HomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()
  const highlightedBlogPosts = blogPosts.filter(blogPost => blogPost.highlight)
  highlightedBlogPosts.sort((a, b) => a.highlight - b.highlight)

  return <>
    <h2>Jonas Brems - Web developer</h2>
    <p>My very own place on the world wide web.</p>
    <div className={styles.title}>
      <h3>Current position</h3>
      <Link href="/career">To career</Link>
    </div>
    <DeLijnBlock />
    <div className={styles.title}>
      <h3>Highlighted blog posts</h3>
      <Link href="/blog">All blog posts</Link>
    </div>
    <BlogPostList blogPosts={highlightedBlogPosts} />
    <h3 className={styles.title}>Most recent blog posts</h3>
    <BlogPostList blogPosts={blogPosts.slice(0, 3)} />
  </>
}