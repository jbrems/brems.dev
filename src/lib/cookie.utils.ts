import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { type NextResponse } from 'next/server'

export function setCookie(response: NextResponse, name: string, value: string, options: Partial<ResponseCookie>) {
  const cookieStore = response.cookies
  cookieStore.set(name, value, {
    secure: !isLocalhost(),
    httpOnly: true,
    ...options,
  })
}

function isLocalhost() {
  return process.env.NEXT_PUBLIC_URL?.includes('localhost')
}