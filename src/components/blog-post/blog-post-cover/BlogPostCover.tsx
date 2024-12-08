import { BlogPost } from "@/app/blog/blog.types";

import styles from './BlogPostCover.module.css'
import { SttpTag } from "../sttp-tag/SttpTag";
import { Watermark } from "./watermark/Watermark";

export default function BlogPostCover({ blogPost, withWatermark = false }: { blogPost: BlogPost, withWatermark?: boolean }) {
  return <div className={styles.blogPostCover}>
    <span className={styles.topic}>{blogPost.topic}</span>
    {blogPost.sttp && <SttpTag className={styles.sttpTag} />}
    {withWatermark && <Watermark className={styles.watermark} />}
  </div>
}