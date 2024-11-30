'use client'

import { type TokenResponse } from "@/lib/oauth.utils"
import { type PhotosPickerSession } from "@/lib/photos-picker.utils"
import { createContext, type Dispatch, type ReactNode, type SetStateAction, useCallback, useMemo, useState } from "react"

export type PresenterContextType = {
  authenticate: (tokenResponse: TokenResponse) => void
  isAuthenticated: () => boolean
  tokenResponse?: TokenResponse
  photosPickerSession?: PhotosPickerSession
  setPhotosPickerSession: Dispatch<SetStateAction<PhotosPickerSession | undefined>>
}

const initialValue: PresenterContextType = {
  authenticate: () => {},
  isAuthenticated: () => false,
  setPhotosPickerSession: () => {},
}
export const PresentrContext = createContext<PresenterContextType>(initialValue)

export function PresentrProvider({ children }: {children: ReactNode }) {
  const [tokenResponse, setTokenResponse] = useState<TokenResponse>()
  const [authenticatedAt, setAuthenticatedAt] = useState<number>()
  const [photosPickerSession, setPhotosPickerSession] = useState<PhotosPickerSession>()

  const authenticate = useCallback((tokenResponse: TokenResponse) => {
    setTokenResponse(tokenResponse)
    setAuthenticatedAt(Date.now())
  }, [setTokenResponse, setAuthenticatedAt])

  const isAuthenticated = useCallback(() => {
    return !!tokenResponse && !!authenticatedAt && Date.now() < (authenticatedAt + tokenResponse.expires_in * 1000)
  }, [tokenResponse, authenticatedAt])

  const presentrContextValue = useMemo(() => ({
    authenticate,
    isAuthenticated,
    tokenResponse,
    photosPickerSession,
    setPhotosPickerSession,
  }), [authenticate, isAuthenticated, tokenResponse, photosPickerSession, setPhotosPickerSession])

  return <PresentrContext.Provider value={presentrContextValue}>{children}</PresentrContext.Provider>
}