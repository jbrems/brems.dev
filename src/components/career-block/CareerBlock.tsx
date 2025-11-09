import styles from './CareerBlock.module.css'

export function CareerBlock({ title, period, technologies, className, children }: { title: string, period: [string, string], technologies: string[], className?: string, children?: React.ReactNode }) {
  return <article className={`${styles.careerBlock} ${className}`}>
    <h2 className={styles.title}>{title}</h2>
    <span className={styles.period}>{period.join(' - ')}</span>
    <div className={styles.description}>{children}</div>
    <span className={styles.technologies}>{technologies.join(', ')}</span>
  </article>
}