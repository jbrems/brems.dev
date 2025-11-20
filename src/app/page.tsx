import styles from './page.module.css'
import Link from 'next/link'
import { getArticles } from '@/lib/article.service'
import { ArticleList } from '@/components/article/ArticleList'

export const metadata = {
  title: '<Home /> | Brems.dev',
  description: 'Jonas Brems - Web developer. My very own place on the world wide web.',
}

export default async function HomePage() {
  const articles = await getArticles();

  return <>
    <h1>Jonas Brems - Web developer</h1>
    <p>My very own place on the world wide web.</p>
    <div className={styles.title}>
      <h2>Articles</h2>
      <Link href="/articles">All articles</Link>
    </div>
    <ArticleList articles={articles.slice(0, 3)} />
  </>
}