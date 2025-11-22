import { ArticleList } from "@/components/article/ArticleList";
import { getArticles } from "@/lib/article.service";

export default async function Page() {
  const articles = await getArticles();

  return <>
    <h1>Articles</h1>
    <ArticleList articles={articles} />
  </>
}

export const metadata = {
  title: 'Articles',
  description: 'An overview of all articles I have written and published. Mostly centered around web development.',
}