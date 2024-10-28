import Link from "next/link";
import { BlogPost } from "@/app/blog/blog.types";
import { BlogPostPreview } from "../blog-post-preview/BlogPostPreview";
import styles from './LinkToBlogPost.module.css'

export function LinkToBlogPost({blogPost}: { blogPost: BlogPost }) {
  return <Link href={`/blog/${blogPost.id}`} className={styles.linkToBlogPost}>
    <BlogPostPreview blogPost={blogPost} />
  </Link>
}