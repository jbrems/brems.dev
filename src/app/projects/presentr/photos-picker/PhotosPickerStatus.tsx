'use client'

import { useContext } from "react"
import { PresentrContext } from "../presentr-provider"
import { LockIcon } from "@/components/icons/lock-icon/LockIcon"
import { CirclePlusIcon } from "@/components/icons/circle-plus-icon/CirclePlusIcon"

export function PhotosPickerStatus() {
  const { isAuthenticated, photosPickerSession } = useContext(PresentrContext)

  return <p>
    {!isAuthenticated() && <><LockIcon /> Click the lock icon to authenticate yourself with Google.</>}
    {isAuthenticated() && photosPickerSession && !photosPickerSession.mediaItemsSet && <><CirclePlusIcon /> Click the plus icon to start picking photos.</>}
  </p>
}