'use client'

import Pocemon from '@/components/pocemon/Pocemon'
import styles from './WhosThatPocemonGame.module.css'
import { getFirstGenPocemonNames } from '@/lib/pocemon.utils'

export function WhosThatPocemonGame() {
  return <div className={styles.whosThatPocemonGame}>
    <Pocemon id={6} hidden />
    <select>
      {getFirstGenPocemonNames().map(((name, index) => <option key={name} value={index}>{name}</option>))}
    </select>
  </div>
}