'use client'

import { ChevronLeftIcon } from '@/components/icons/chevron-left-icon/ChevronLeftIcon'
import { usePhotosPicker } from '../photos-picker/photos-picker.hook'
import styles from './SelectedPhoto.module.css'

export function SelectedPhoto() {
  const { selectedPhoto, hasMorePhotos, showPreviousPhoto, showNextPhoto } = usePhotosPicker()

  if (!selectedPhoto) return

  return <div className={styles.selectedPhotoContainer}>
    <img src={URL.createObjectURL(selectedPhoto)} />
    {hasMorePhotos() && <>
      <button onClick={showPreviousPhoto}><ChevronLeftIcon color="gold" /></button>
      <button onClick={showNextPhoto}><ChevronLeftIcon color="gold" className="rotate-180" /></button>
    </>}
  </div>
}