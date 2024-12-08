import styles from './page.module.css'
import { WhosThatPocemonGame } from './whos-that-pocemon-game/WhosThatPocemonGame'

export const metadata = {
  title: 'Who\'s that POCemon?',
  description: 'What started as a proof of concept about Next.js caching turned into a standalone project.',
}

export default function WhosThatPocemonPage() {
  return <div className={styles.whosThatPocemon}>
    <h2 className={styles.title}>Who&apos;s that POCemon?</h2>
    <WhosThatPocemonGame />
  </div>
}