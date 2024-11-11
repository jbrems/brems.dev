import styles from './Timeline.module.css'

export function Timeline() {
  const years = new Array(13).fill(0).map((_, index) => 2025 - index)
  
  return <div className={styles.timeline}>
    {years.map((year) => <section key={year} className={styles.yearSection}>
      <div className={styles.year}>{year}</div>
      <div className={styles.segment} />
    </section>)}
    <section className={styles.yearSection}>
      <div className={styles.year}>2012</div>
    </section>
  </div>
}