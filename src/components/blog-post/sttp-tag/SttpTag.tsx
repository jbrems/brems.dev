import styles from './SttpTag.module.css'

export function SttpTag({ className }: { className?: string }) {
  return <span className={`${styles.sttpTag} ${className}`}>STTP</span>
}