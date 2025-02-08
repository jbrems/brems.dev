import { NrnField } from '@/components/input-field/nrn-field/NrnField'
import styles from './page.module.css'
import { screenCaptureSize } from '@/lib/puppeteer.service'

export const metadata = {
  title: 'National Registration Generation',
  description: 'Generates and completes Belgian national registration numbers.',
  openGraph: {
    title: 'National Registration Generation',
    description: 'Generates and completes Belgian national registration numbers.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects/national-registration-generation?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the project',
    }],
  },
}

export default function NationalRegistrationNumberPage() {
  return <div className={styles.page}>
    <h1 className={styles.title}>National Registration Generation</h1>
    <NrnField className={styles.nrnField}/>
  </div>
}