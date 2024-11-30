'use client'

import { useContext } from "react"
import { PresentrContext } from "../presentr-provider"
import { LockIcon } from "@/components/icons/lock-icon/LockIcon"
import { CirclePlusIcon } from "@/components/icons/circle-plus-icon/CirclePlusIcon"

import styles from './PhotosPickerStatus.module.css'

export function PhotosPickerStatus() {
  const { isAuthenticated, photosPickerSession } = useContext(PresentrContext)

  return <p className={styles.photosPickerStatus} >
    {!isAuthenticated() && <><LockIcon /> Click the lock icon to authenticate yourself with Google.</>}
    {isAuthenticated() && photosPickerSession && !photosPickerSession.mediaItemsSet && <><CirclePlusIcon /> Click the plus icon to start picking photos.</>}
  </p>
}