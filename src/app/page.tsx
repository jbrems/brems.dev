import { BlogPostList } from "@/components/blog-post/blog-post-list/BlogPostList"
import { getAllBlogPosts, sortBlogPosts } from "./blog/blog.utils"
import { DeLijnBlock } from "./career/page"

export default async function HomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()
  const recentBlogPosts = blogPosts.slice(0, 5)

  return <>
    <h2>Jonas Brems - Web developer</h2>
    <p>My very own place on the world wide web.</p>
    <h3>Current position</h3>
    <DeLijnBlock />
    <h3 style={{ marginTop: '2em' }}>Recent blog posts</h3>
    <BlogPostList blogPosts={recentBlogPosts} />
  </>
}