import { ReactNode } from "react";

import styles from './Project.module.css'
import Link from "next/link";

export function Project({ url, coverImageUrl, title, children }: { url: string, coverImageUrl: string, title: string, children: ReactNode }) {
  return <Link href={url} className={styles.project}>
      <article>
        <img src={coverImageUrl} alt="Project cover image" />
        <h3>{title}</h3>
        {children}
      </article>
    </Link>
}