'use client'

import { usePhotosPicker } from '../photos-picker/photos-picker.hook'
import styles from './SelectedPhoto.module.css'
import { useContext } from 'react'
import { PresentrContext } from '../presentr-provider'

export function SelectedPhoto() {
  const { selectedPhoto } = useContext(PresentrContext)
  usePhotosPicker()

  if (!selectedPhoto) return null

  return <div className={styles.selectedPhotoContainer}>
    <img src={URL.createObjectURL(selectedPhoto)} alt="Presentr active photo" />
  </div>
}