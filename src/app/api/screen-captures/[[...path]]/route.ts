import { NextRequest, NextResponse } from 'next/server'

import * as puppeteerService from '@/lib/puppeteer.service'

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }>}) {
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
    const image = await puppeteerService.capturePage(`${process.env.NEXT_PUBLIC_URL}/${path?.join('/') ?? ''}`, options)
    if (!image) return new NextResponse(null, { status: 404 })
    return new NextResponse(image, { headers: { 'content-type': 'image/jpeg', 'cache-control': `max-age=${60 * 60 * 24}, public, stale-if-error` } })
  } catch (error) {
    console.log('Error while capturing screen', error)
    return new NextResponse(null, { status: 500, statusText: 'Failed to generate screen capture.' })
  }
}
