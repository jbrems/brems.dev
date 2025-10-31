import { NextRequest, NextResponse } from 'next/server'

import * as puppeteerService from '@/lib/puppeteer.service'

export async function GET(request: NextRequest, { params }: { params: Promise<{ path?: string[] | undefined }>}) {
  const { path } = await params
  const searchParams = request.nextUrl.searchParams

  const size = searchParams.get('size') as keyof typeof puppeteerService.screenCaptureSize || 'openGraph'

  const width = Number(searchParams.get('width')) || puppeteerService.screenCaptureSize[size].width
  const height = Number(searchParams.get('height')) || puppeteerService.screenCaptureSize[size].height

  const options = {
    width,
    height,
    cssRules: 'header, footer, nav { display: none; }',
  }

  try {
    // Cast the result from capturePage directly to Uint8Array
    const image = await puppeteerService.capturePage(`${process.env.NEXT_PUBLIC_URL}/${path?.join('/') ?? ''}`, options) as Uint8Array
    if (!image) return new NextResponse(null, { status: 404 })

  // Create a Blob from the Uint8Array's underlying ArrayBuffer (type-cast to satisfy lib mismatch)
  const blob = new Blob([image.buffer as unknown as ArrayBuffer], { type: 'image/jpeg' })
    return new NextResponse(blob, { headers: { 'content-type': 'image/jpeg', 'cache-control': `max-age=${60 * 60 * 24}, public, stale-while-revalidate` } })
  } catch (error) {
    console.log('Error while capturing screen', error)
    return new NextResponse(null, { status: 500, statusText: 'Failed to generate screen capture.' })
  }
}
