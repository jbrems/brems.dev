import { BlogPost } from "@/app/blog/blog.types";
import BlogPostCover from "../blog-post/blog-post-cover/BlogPostCover";
import type { Article } from "./article.types";

export function ArticleSummary({ article }: { article: Article }) {
  return <article className="flex items-center gap-4">
    <BlogPostCover blogPost={{ topic: article.topic, sttp: false } as BlogPost} />
    <section className="flex flex-col gap-1 py-1">
      <h2 className="text-xl! font-light! mt-0! text-neutral-100">{article.title}</h2>
      <p className="my-0! font-extralight! text-neutral-350">{article.description}</p>
      <p className="my-0! text-goldenrod small-caps text-sm!">
        Last updated at <span className="ml-1">{(article.updated || article.created).toISOString().split('T')[0]}</span>
      </p>
    </section>
  </article>
}