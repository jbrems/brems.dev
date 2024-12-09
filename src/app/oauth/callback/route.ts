import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { decodeState } from '@/lib/oauth.utils'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const code = searchParams.get('code')
  const state = searchParams.get('state')

  if (!code || !state) {
    redirect('/?error=missing_oauth_code_or_state_parameter_in_callback')
  }

  const { redirectTo } = decodeState(state)

  const destination = new URL(redirectTo, new URL(request.url).origin)
  destination.searchParams.set('code', code)
  return NextResponse.redirect(destination)
}