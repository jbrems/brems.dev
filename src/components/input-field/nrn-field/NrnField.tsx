import styles from './NrnField.module.css'
import { InputField } from '@/components/input-field/InputField'

export function NrnField() {
  return <div className={styles.nrnField}>
    <InputField className={styles.inputField} type="text" />
  </div>
}