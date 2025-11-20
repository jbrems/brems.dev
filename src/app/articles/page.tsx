'use server'
import { ArticleList } from "@/components/article/ArticleList";
import { getArticles } from "@/lib/article.service";

export default async function Page() {
  const articles = await getArticles();

  return (
    <main>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </main>
  );
}