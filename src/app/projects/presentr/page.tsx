import styles from './page.module.css'
import { PhotosPickerActions } from "./photos-picker/PhotosPickerActions";
import { PhotosPickerStatus } from "./photos-picker/PhotosPickerStatus";
import { SelectedPhoto } from './selected-photo/SelectedPhoto';

export default async function PresentrPage() {
  return <>
    <h2>Presentr</h2>
    <p>Present your photos with style!</p>
    <div className={styles.presentingContainer}>
      <img src="/presenting.jpeg" />
      <SelectedPhoto />
      <PhotosPickerActions className={styles.addIcon} />
    </div>
    <PhotosPickerStatus />
  </>
}