import styles from './Timeline.module.css'

export function Timeline({ start = 2012, end = 2026 }: { start?: number, end?: number }) {
  const years = new Array(end - start).fill(0).map((_, index) => end - index)

  return <div className={styles.timeline}>
    {years.map((year) => <section key={year} className={styles.yearSection}>
      <div className={styles.year}>{year}</div>
      <div className={styles.segment} />
    </section>)}
    <section className={styles.yearSection}>
      <div className={styles.year}>{start}</div>
    </section>
  </div>
}