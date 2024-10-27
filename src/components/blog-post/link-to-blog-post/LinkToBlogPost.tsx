import { BlogPost } from "@/app/blog/blog.types";
import Link from "next/link";

export function LinkToBlogPost({blogPost}: { blogPost: BlogPost }) {
  return <Link href={`/blog/${blogPost.id}`}>
    <article>
      {blogPost.topic && <span>[{blogPost.topic}]</span>}
      <span>{blogPost.title}</span>
      <span>{blogPost.date?.toString()}</span>
    </article>
  </Link>
}