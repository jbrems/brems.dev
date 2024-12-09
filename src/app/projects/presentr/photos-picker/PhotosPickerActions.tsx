'use client'

import { useContext } from 'react'
import { PresentrContext } from '../presentr-provider'
import Link from 'next/link'
import { CirclePlusIcon } from '@/components/icons/circle-plus-icon/CirclePlusIcon'
import { LockIcon } from '@/components/icons/lock-icon/LockIcon'
import { getAuthUrl, State } from '@/lib/oauth.utils'

export function PhotosPickerActions({ className }: { className?: string }) {
  const { isAuthenticated, photosPickerSession } = useContext(PresentrContext)

  const scopes = ['https://www.googleapis.com/auth/photospicker.mediaitems.readonly']
  const state: State = { redirectTo: '/projects/presentr/callback' }

  return <>
    {!isAuthenticated() && <Link href={getAuthUrl(scopes, state)} className={className}><LockIcon color="gold" /></Link>}
    {isAuthenticated() && photosPickerSession && !photosPickerSession.mediaItemsSet && <Link href={photosPickerSession.pickerUri} target="_blank" className={className}><CirclePlusIcon color="gold" /></Link>}
  </>
}