import Link from 'next/link'

import styles from './Footer.module.css'

export function Footer() {
  return <footer className={styles.footer}>
    &copy;2024
    <span className={styles.spacer}>|</span>
    <Link href="/privacy-policy">Privacy policy</Link>
    <span className={styles.spacer}>|</span>
    <Link href="/disclaimer">Disclaimer</Link>
  </footer>
}