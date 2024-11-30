import { getPickedPhoto, getPickedPhotos, pollPhotosPickerSession, startPhotosPickerSession } from "@/lib/photos-picker.utils"
import { useContext, useEffect, useState } from "react"
import { PresentrContext } from "../presentr-provider"

export function usePhotosPicker() {
  const { tokenResponse, photosPickerSession, setPhotosPickerSession } = useContext(PresentrContext)
  const [pickedPhotos, setPickedPhotos] = useState<string[]>([])
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0)
  const [selectedPhoto, setSelectedPhoto] = useState<Blob | null>(null)
  
  useEffect(() => {
    async function startSession() {
      if (tokenResponse && !photosPickerSession) {
        const session = await startPhotosPickerSession(tokenResponse?.access_token)
        setPhotosPickerSession(session)
      }
    }
    startSession()
  }, [tokenResponse, photosPickerSession, setPhotosPickerSession])

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!tokenResponse?.access_token || !photosPickerSession?.id) return

      const session = await pollPhotosPickerSession(tokenResponse.access_token, photosPickerSession.id)
      setPhotosPickerSession(session)
      
      if (session.mediaItemsSet) {
        clearInterval(interval)
        const photos = await getPickedPhotos(tokenResponse.access_token, photosPickerSession.id)
        const mappedPhotos = photos.mediaItems.map(p => p.mediaFile.baseUrl)
        setPickedPhotos(mappedPhotos)

      }
    }, 5000)
    return () => clearInterval(interval)
  }, [tokenResponse, photosPickerSession, setPhotosPickerSession])
  
  useEffect(() => {
    async function fetchSelectedPhoto() {
      if (!tokenResponse || !pickedPhotos) return

      setSelectedPhoto(await getPickedPhoto(tokenResponse.access_token, pickedPhotos[selectedPhotoIndex]))
    }
    fetchSelectedPhoto()
  }, [tokenResponse, pickedPhotos, selectedPhotoIndex, setSelectedPhoto])

  function hasMorePhotos() {
    return pickedPhotos.length > 1
  }

  function showPreviousPhoto() {
    setSelectedPhotoIndex((selectedPhotoIndex) => {
      if (selectedPhotoIndex === 0) return pickedPhotos.length - 1
      return (selectedPhotoIndex - 1) % pickedPhotos.length
    })
  }
  
  function showNextPhoto() {
    setSelectedPhotoIndex((selectedPhotoIndex) => (selectedPhotoIndex + 1) % pickedPhotos.length)
  }

  return {
    selectedPhoto,
    hasMorePhotos,
    showPreviousPhoto,
    showNextPhoto,
  }
}