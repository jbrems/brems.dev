import { BlogPostList } from "@/components/blog-post/blog-post-list/BlogPostList"
import { getAllBlogPosts, groupByTopic, sortBlogPosts } from "./blog.utils"
import { SttpTag } from "@/components/blog-post/sttp-tag/SttpTag"

export default async function BlogHomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()
  const { ui, nextjs, nodejs, ...others } = blogPosts.reduce(groupByTopic, {})

  return <>
    <h2>My Blog</h2>
    <p>
      <SttpTag />{' '}
      <span>The STTP tag marks blog posts containing straight to the point instructions with little or no context or explanation.</span>
    </p>
    <h3>UI</h3>
    <BlogPostList blogPosts={ui} />
    <h3>Next.js</h3>
    <BlogPostList blogPosts={nextjs} />
    <h3>Node.js</h3>
    <BlogPostList blogPosts={nodejs} />
    {Object.entries(others).map(entry => <section key={entry[0]}>
      <h3>{entry[0]}</h3>
      <BlogPostList blogPosts={entry[1]} />
    </section>)}
  </>
}