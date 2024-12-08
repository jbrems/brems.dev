import { BlogPost as BlogPostType } from "@/app/blog/blog.types";
import { BlogPostHeader } from "./blog-post-header/BlogPostHeader";
import { Markdown } from "../markdown/Markdown";
import { ArrowLeftIcon } from "../icons/arrow-left-icon/ArrowLeftIcon";
import Link from "next/link";

import styles from './BlogPost.module.css'

export function BlogPost({ blogPost, className = '' }: { blogPost: BlogPostType, className?: string }) {
  return <article className={className}>
    <BackToBlogLink />
    <BlogPostHeader blogPost={blogPost} />
    <Markdown content={blogPost.content} />
    <BackToBlogLink />
  </article>
}

function BackToBlogLink() {
  return <Link href="/blog" className={styles.backToBlogLink}>
    <ArrowLeftIcon color="#888888" size={16} />
    <span>Back to blog</span>
  </Link>
}