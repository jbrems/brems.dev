import { NextRequest, NextResponse } from 'next/server'

import * as puppeteerService from '@/lib/puppeteer.service'

const sizes: Record<string, { width: number, height: number }> = {
  openGraph: { width: 1200, height: 630 },
  msTeams: { width: 790, height: 627 },
  square: { width: 800, height: 800 },
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }>}) {
  const { path } = await params
  const searchParams = request.nextUrl.searchParams

  const width = Number(searchParams.get('width')) || sizes[searchParams.get('size') || 'openGraph'].width
  const height = Number(searchParams.get('height')) || sizes[searchParams.get('size') || 'openGraph'].height

  const options = {
    width,
    height,
    cssRules: 'header, footer, nav { display: none; }',
  }

  try {
    const image = await puppeteerService.capturePage(`${process.env.NEXT_PUBLIC_URL}/${path?.join('/') ?? ''}`, options)
    if (!image) return new NextResponse(null, { status: 404 })
    return new NextResponse(image, { headers: { 'content-type': 'image/jpeg', 'cache-control': `max-age=${60 * 60 * 24}, public, stale-if-error` } })
  } catch {
    return new NextResponse(null, { status: 500, statusText: 'Failed to generate screen capture.' })
  }
}
