import { ReactNode } from 'react'
import styles from './TopicFilterInput.module.css'

export function TopicFilterInput({ children, className, ...props }: { children?: ReactNode, className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <div className={`${styles.topicFilterInput} button ${className}`}>
    {children}
    <input {...props} />
  </div>
}