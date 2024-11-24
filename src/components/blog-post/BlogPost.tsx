import { BlogPost as BlogPostType } from "@/app/blog/blog.types";
import { BlogPostHeader } from "./blog-post-header/BlogPostHeader";
import { Markdown } from "../markdown/Markdown";

export function BlogPost({ blogPost }: { blogPost: BlogPostType }) {
  return <article>
    <BlogPostHeader blogPost={blogPost} />
    <Markdown content={blogPost.content} />
  </article>
}