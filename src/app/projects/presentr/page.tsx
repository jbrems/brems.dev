import styles from './page.module.css'
import { PhotosPickerActions } from "./photos-picker/PhotosPickerActions";
import { PhotosPickerStatus } from "./photos-picker/PhotosPickerStatus";
import { PresentrActions } from './PresentrActions';
import { SelectedPhoto } from './selected-photo/SelectedPhoto';

export const metadata = {
  title: 'Presentr',
}

export default async function PresentrPage() {
  return <>
    <h2>Presentr</h2>
    <p>Present your photos with style!</p>
    <div className={styles.presentingContainer}>
      <img src="/presentr-template.jpeg" />
      <SelectedPhoto />
      <PhotosPickerActions className={styles.photosPickerActions} />
      <PresentrActions className={styles.presentrActions} />
    </div>
    <PhotosPickerStatus />
  </>
}