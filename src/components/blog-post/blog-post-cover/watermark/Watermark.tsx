import styles from './Watermark.module.css'

export function Watermark({ className }: { className?: string }) {
  return <span className={`${styles.watermark} ${className}`}>Brems.dev</span>
}