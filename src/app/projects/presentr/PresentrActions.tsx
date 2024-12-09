'use client'

import { ChevronLeftIcon } from '@/components/icons/chevron-left-icon/ChevronLeftIcon'
import { useContext } from 'react'
import { PresentrContext } from './presentr-provider'

export function PresentrActions({ className }: { className?: string }) {
  const { hasMorePhotos, showPreviousPhoto, showNextPhoto } = useContext(PresentrContext)

  if (!hasMorePhotos()) return null

  return <div className={className}>
    <button onClick={showPreviousPhoto}><ChevronLeftIcon size={36} color="gold" /></button>
    <button onClick={showNextPhoto}><ChevronLeftIcon size={36} color="gold" className="rotate-180" /></button>
  </div>
}