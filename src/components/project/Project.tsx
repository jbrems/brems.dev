import { ReactNode } from 'react'

import styles from './Project.module.css'
import Link from 'next/link'
import { ScreenCapture } from '../screen-capture/ScreenCapture'

export function Project({ path, title, children }: { path: string, title: string, children: ReactNode }) {
  return <Link href={path} className={styles.project}>
    <article className={styles.article}>
      <div className={styles.imageContainer}>
        <img src={`${path}/opengraph-image.png`} className={styles.projectImage} alt="Project cover image" />
      </div>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
    </article>
  </Link>
}