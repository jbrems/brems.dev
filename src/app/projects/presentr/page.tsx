import { screenCaptureSize } from '@/lib/puppeteer.service'
import styles from './page.module.css'
import { PhotosPickerActions } from './photos-picker/PhotosPickerActions'
import { PhotosPickerStatus } from './photos-picker/PhotosPickerStatus'
import { PresentrActions } from './PresentrActions'
import { SelectedPhoto } from './selected-photo/SelectedPhoto'

export const metadata = {
  title: 'Presentr',
  description: 'Present your photos with style! Implements the Google Photos picker APIs.',
  openGraph: {
    title: 'Presentr',
    description: 'Present your photos with style! Implements the Google Photos picker APIs.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects/presentr?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the project',
    }],
  },
}

export default async function PresentrPage() {
  return <>
    <h2>Presentr</h2>
    <p>Present your photos with style!</p>
    <div className={styles.presentingContainer}>
      <img src="/presentr-template.jpeg" alt="Presentr template" />
      <SelectedPhoto />
      <PhotosPickerActions className={styles.photosPickerActions} />
      <PresentrActions className={styles.presentrActions} />
    </div>
    <PhotosPickerStatus />
  </>
}