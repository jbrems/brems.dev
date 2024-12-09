import Link from 'next/link'
import styles from './Navigation.module.css'
import { Branding } from '../branding/Branding'
import { MenuIcon } from '../icons/menu-icon/MenuIcon'
import { CloseIcon } from '../icons/close-icon/CloseIcon'

export function Navigation() {
  return <nav className={styles.navigation}>
    <ul>
      <li><Link href="/"><Branding /></Link></li>
      <li className={styles.toggleMenu}>
        <label>
          <input type="checkbox" />
          <MenuIcon size={24} />
          <CloseIcon size={24} />
        </label>
      </li>
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/career">Career</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </ul>
  </nav>
}