import { getFirstGenPocemonNames, getHpColor } from '@/lib/pocemon.utils'
import styles from './Pocemon.module.css'

export default function Pocemon({ id, hpPercentage = 100, hidden = false, className }: { id: number, hidden?: boolean, hpPercentage?: number, className?: string }) {
  const hpColor = getHpColor(hpPercentage)
  
  return <div className={`${styles.pocemon} ${hidden && styles.hidden} ${className}`}>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={hidden ? 'Outline of a mysterious Pocemon' : `It's ${getFirstGenPocemonNames()[id]}`} />
    <div className={styles.hpContainer}>
      <p>HP:</p>
      <div className={styles.hpBar}>
        <div className={styles.hpValue} style={{ width: `${hpPercentage}%`, backgroundColor: hpColor }}></div>
      </div>
    </div>
  </div>
}