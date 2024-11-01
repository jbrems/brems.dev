import { BlogPost } from "@/app/blog/blog.types";
import { LinkToBlogPost } from "../link-to-blog-post/LinkToBlogPost";

export function BlogPostList({ blogPosts }: { blogPosts: BlogPost[] }) {
  return <ul>
    {blogPosts.map(blogPost => <li key={blogPost.id}><LinkToBlogPost blogPost={blogPost} /></li>)}
  </ul>
}