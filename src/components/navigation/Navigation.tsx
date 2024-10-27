import Link from "next/link";
import styles from './Navigation.module.css'
import { Branding } from "../branding/Branding";

export function Navigation() {
  return <nav className={styles.navigation}>
    <ul>
      <li><Link href="/"><Branding /></Link></li>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/blog">Blog</Link></li>
    </ul>
  </nav>
}