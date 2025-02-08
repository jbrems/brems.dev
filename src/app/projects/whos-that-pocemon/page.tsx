import { screenCaptureSize } from '@/lib/puppeteer.service'
import styles from './page.module.css'
import { WhosThatPocemonGame } from './whos-that-pocemon-game/WhosThatPocemonGame'

export const metadata = {
  title: 'Who\'s that POCemon?',
  description: 'What started as a proof of concept about Next.js caching turned into a standalone project.',
  openGraph: {
    title: 'Who\'s that POCemon?',
    description: 'What started as a proof of concept about Next.js caching turned into a standalone project.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects/whos-that-pocemon?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the project',
    }],
  },
}

export default function WhosThatPocemonPage() {
  return <div className={styles.whosThatPocemon}>
    <h2 className={styles.title}>Who&apos;s that POCemon?</h2>
    <WhosThatPocemonGame />
  </div>
}