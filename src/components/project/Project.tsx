import { ReactNode } from 'react'

import styles from './Project.module.css'
import Link from 'next/link'

export function Project({ path, title, children }: { path: string, title: string, children: ReactNode }) {
  return <Link href={path} className={styles.project}>
    <article className={styles.article}>
      <div className={styles.imageContainer}>
        <img src={`/api/screen-captures${path}?size=square`} alt="Project cover image" />
      </div>
      <main>
        <h3>{title}</h3>
        {children}
      </main>
    </article>
  </Link>
}