import { NrnField } from '@/components/input-field/nrn-field/NrnField'
import styles from './page.module.css'

export const metadata = {
  title: 'National Registration Generation',
  description: 'Generates and completes Belgian national registration numbers.',
}

export default function NationalRegistrationNumberPage() {
  return <div className={styles.page}>
    <h1 className={styles.title}>National Registration Generation</h1>
    <NrnField className={styles.nrnField} />
  </div>
}