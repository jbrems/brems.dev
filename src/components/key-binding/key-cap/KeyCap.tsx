import { ReactNode } from 'react'
import styles from './KeyCap.module.css'

export function KeyCap({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`${styles.keyCap} ${className}`}>{children}</div>
}