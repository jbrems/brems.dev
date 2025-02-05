import { NrnField } from '@/components/input-field/nrn-field/NrnField'
import styles from './page.module.css'

export default function NationalRegistrationNumberPage() {
  return <div className={styles.page}>
    <h1 className={styles.title}>National Registration Generation</h1>
    <NrnField className={styles.nrnField}/>
  </div>
}