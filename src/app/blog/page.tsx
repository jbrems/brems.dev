import { BlogPostList } from "@/components/blog-post/blog-post-list/BlogPostList"
import { getAllBlogPosts, sortBlogPosts } from "./blog.utils"

export default async function BlogHomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()

  return <>
    <h2>My Blog</h2>
    <BlogPostList blogPosts={blogPosts} />
  </>
}