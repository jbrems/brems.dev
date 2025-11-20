import { Article } from "./article.types";
import { ArticleSummary } from "./ArticleSummary";

export function ArticleList({ articles }: { articles: Article[] }) {
  return <ul>
    {articles.map(article => <li key={article.id}><a href={article.href} className="block no-underline! hover:radial-bg rounded-lg p-1 mb-4"><ArticleSummary article={article} /></a></li>)}
  </ul>
}