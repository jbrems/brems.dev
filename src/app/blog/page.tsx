import { LinkToBlogPost } from "../../components/blog-post/link-to-blog-post/LinkToBlogPost"
import { getAllBlogPosts, sortBlogPosts } from "./blog.utils"

export default async function BlogHomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()

  return <>
    <h2>My Blog</h2>
    <ul>{blogPosts.map(blogPost => <li key={blogPost.id}><LinkToBlogPost blogPost={blogPost} /></li>)}</ul>
  </>
}