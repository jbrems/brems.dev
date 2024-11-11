import styles from './CareerBlock.module.css'

export function CareerBlock({ title, period, technologies, className, children }: { title: string, period: [string, string], technologies: string[], className?: string, children?: React.ReactNode }) {
  return <article className={`${styles.careerBlock} ${className}`}>
    <h3 className={styles.title}>{title}</h3>
    <span className={styles.period}>{period.join(' - ')}</span>
    <p className={styles.description}>{children}</p>
    <span className={styles.technologies}>{technologies.join(', ')}</span>
  </article>
}