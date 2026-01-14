import styles from './page.module.css'
import Link from 'next/link'
import { getArticles } from '@/lib/article.service'
import { ArticleList } from '@/components/article/ArticleList'
import { Project } from '@/components/project/Project'

export const metadata = {
  title: '<Home /> | Brems.dev',
  description: 'Jonas Brems - Web developer. My very own place on the world wide web.',
}

export default async function HomePage() {
  const articles = await getArticles();

  return <>
    <section className="flex flex-col md:flex-row items-center gap-8">
      <img src="/this-is-me.png" alt="This is me" className="w-48 h-48 rounded-full scale-x-[-1]" />
      <div>
        <h1>Jonas Brems - Web developer @ De Lijn</h1>
        <p>My very own place on the world wide web.</p>
      </div>
    </section>
    <div className={styles.title}>
      <h2>Some articles</h2>
      <Link href="/articles">All articles</Link>
    </div>
    <ArticleList articles={articles.slice(0, 3)} />
    <div className={styles.title}>
      <h2>Some projects</h2>
      <Link href="/projects">All projects</Link>
    </div>
    <ul className="flex flex-col gap-4">
      <li>
        <Project path="/projects/national-registration-generation" title="National Registration Generation">
          <p>Generates and completes Belgian national registration numbers.</p>
        </Project>
      </li>
      <li>
        <Project path="/projects/base64-encoder" title="Base64 encoder">
          <p>A simple client side tool to encode and decode Base64 values.</p>
          <p>Also supports Base64url encoding.</p>
        </Project>
      </li>
      <li>
        <Project path="/projects/whos-that-pocemon" title="Who's that POCemon?">
          <p>What started as a proof of concept about Next.js caching turned into a standalone project.</p>
          <p>Test your generation 1 POCemon knowledge with this fun little game.</p>
        </Project>
      </li>
    </ul>
  </>
}