'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useContext, useEffect } from 'react'
import { PresentrContext } from '../presentr-provider'
import { getTokensAction } from './callback.actions'

export default function SuspenseWrapper() {
  return <Suspense><PresentrCallbackPage /></Suspense>
}

function PresentrCallbackPage() {
  const searchParams = useSearchParams()
  const { authenticate } = useContext(PresentrContext)
  const router = useRouter()

  useEffect(() => {
    async function handleAuthorizationCode() {
      const authorizationCode = searchParams.get('code')

      if (!authorizationCode) return

      const tokenResponse = await getTokensAction(authorizationCode)
      authenticate(tokenResponse)

      router.push('/projects/presentr')
    }
    handleAuthorizationCode()
  }, [searchParams, authenticate, router])

  return <p>Redirecting...</p>
}