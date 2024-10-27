import Link from "next/link";
import styles from './Navigation.module.css'

export function Navigation() {
  return <nav className={styles.navigation}>
    <ul>
      <li><Link href="/">Brems.dev</Link></li>
      <li><Link href="/blog">Blog</Link></li>
    </ul>
  </nav>
}