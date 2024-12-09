'use client'

import { type TokenResponse } from '@/lib/oauth.utils'
import { getPickedPhoto, type PhotosPickerSession } from '@/lib/photos-picker.utils'
import { createContext, type Dispatch, type ReactNode, type SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'

export type PresenterContextType = {
  authenticate: (tokenResponse: TokenResponse) => void
  isAuthenticated: () => boolean
  tokenResponse?: TokenResponse
  photosPickerSession?: PhotosPickerSession
  setPhotosPickerSession: Dispatch<SetStateAction<PhotosPickerSession | undefined>>
  setPickedPhotos: Dispatch<SetStateAction<string[]>>
  selectedPhoto?: Blob
  hasMorePhotos: () => boolean
  showPreviousPhoto: () => void
  showNextPhoto: () => void
}

const initialValue: PresenterContextType = {
  authenticate: () => {},
  isAuthenticated: () => false,
  setPhotosPickerSession: () => {},
  setPickedPhotos: () => {},
  hasMorePhotos: () => false,
  showPreviousPhoto: () => {},
  showNextPhoto: () => {},
}
export const PresentrContext = createContext<PresenterContextType>(initialValue)

export function PresentrProvider({ children }: {children: ReactNode }) {
  const [tokenResponse, setTokenResponse] = useState<TokenResponse>()
  const [authenticatedAt, setAuthenticatedAt] = useState<number>()
  const [photosPickerSession, setPhotosPickerSession] = useState<PhotosPickerSession>()
  const [pickedPhotos, setPickedPhotos] = useState<string[]>([])
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0)
  const [selectedPhoto, setSelectedPhoto] = useState<Blob>()

  const authenticate = useCallback((tokenResponse: TokenResponse) => {
    setTokenResponse(tokenResponse)
    setAuthenticatedAt(Date.now())
  }, [setTokenResponse, setAuthenticatedAt])

  const isAuthenticated = useCallback(() => {
    return !!tokenResponse && !!authenticatedAt && Date.now() < (authenticatedAt + tokenResponse.expires_in * 1000)
  }, [tokenResponse, authenticatedAt])

  useEffect(() => {
    async function fetchSelectedPhoto() {
      if (!tokenResponse?.access_token || !pickedPhotos?.length) return

      const photoUrl = pickedPhotos[selectedPhotoIndex]
      const photo = await getPickedPhoto(tokenResponse.access_token, photoUrl)
      setSelectedPhoto(photo)
    }
    fetchSelectedPhoto()
  }, [pickedPhotos, selectedPhotoIndex, tokenResponse, setSelectedPhoto])

  const hasMorePhotos = useCallback(() => {
    return pickedPhotos.length > 1
  }, [pickedPhotos])

  const showPreviousPhoto = useCallback(() => {
    setSelectedPhotoIndex((selectedPhotoIndex) => {
      if (selectedPhotoIndex === 0) return pickedPhotos.length - 1
      return (selectedPhotoIndex - 1) % pickedPhotos.length
    })
  }, [setSelectedPhotoIndex, pickedPhotos])

  const showNextPhoto = useCallback(() => {
    setSelectedPhotoIndex((selectedPhotoIndex) => (selectedPhotoIndex + 1) % pickedPhotos.length)
  }, [setSelectedPhotoIndex, pickedPhotos])

  const presentrContextValue = useMemo(() => ({
    authenticate,
    isAuthenticated,
    tokenResponse,
    photosPickerSession,
    setPhotosPickerSession,
    setPickedPhotos,
    selectedPhoto,
    hasMorePhotos,
    showPreviousPhoto,
    showNextPhoto,
  }), [authenticate, isAuthenticated, tokenResponse, photosPickerSession, setPhotosPickerSession, setPickedPhotos, selectedPhoto, hasMorePhotos, showPreviousPhoto, showNextPhoto])

  return <PresentrContext.Provider value={presentrContextValue}>{children}</PresentrContext.Provider>
}