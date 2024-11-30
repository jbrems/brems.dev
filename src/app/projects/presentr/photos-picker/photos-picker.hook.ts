import { getPickedPhotos, pollPhotosPickerSession, startPhotosPickerSession } from "@/lib/photos-picker.utils"
import { useContext, useEffect } from "react"
import { PresentrContext } from "../presentr-provider"

export function usePhotosPicker() {
  const { tokenResponse, photosPickerSession, setPhotosPickerSession, setPickedPhotos } = useContext(PresentrContext)
  
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
  }, [tokenResponse, photosPickerSession, setPhotosPickerSession, setPickedPhotos])
}