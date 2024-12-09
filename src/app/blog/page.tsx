import { BlogPostList } from '@/components/blog-post/blog-post-list/BlogPostList'
import { getAllBlogPosts, sortBlogPosts } from './blog.utils'
import { SttpTag } from '@/components/blog-post/sttp-tag/SttpTag'

import styles from './page.module.css'
import { TopicFilter } from '@/components/topic-filter/TopicFilter'

export const metadata = {
  title: 'Blog',
  description: 'An overview of all blog posts I have written in my life. Mostly centered around web development.',
}

export default async function BlogHomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()

  const topics = [...new Set(blogPosts.map(blogPost => blogPost.topic))]

  return <>
    <h2>My Blog</h2>
    <p>
      <SttpTag className={styles.sttpTag} />{' '}
      <span>The STTP tag marks blog posts containing straight to the point instructions with little or no context or explanation.</span>
    </p>
    <TopicFilter topics={topics} className={styles.topicFilters} />
    <BlogPostList blogPosts={blogPosts} />
  </>
}