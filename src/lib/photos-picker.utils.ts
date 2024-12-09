export type PhotosPickerSession = {
  id: string
  pickerUri: string
  mediaItemsSet: boolean
}

export async function startPhotosPickerSession(accessToken: string): Promise<PhotosPickerSession> {
  const response = await fetch('https://photospicker.googleapis.com/v1/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  console.log(response.status, response.statusText)

  return response.json()
}

export async function pollPhotosPickerSession(accessToken: string, sessionId: string): Promise<PhotosPickerSession> {
  const response = await fetch(`https://photospicker.googleapis.com/v1/sessions/${sessionId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  console.log(response.status, response.statusText)

  return response.json()
}

export async function getPickedPhotos(accessToken: string, sessionId: string): Promise<{ mediaItems: { mediaFile: { baseUrl: string, filename: string } }[]}> {
  const response = await fetch(`https://photospicker.googleapis.com/v1/mediaItems?sessionId=${sessionId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  console.log(response.status, response.statusText)

  return response.json()
}

export async function getPickedPhoto(accessToken: string, url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'force-cache',
  })

  console.log(response.status, response.statusText)

  return response.blob()
}