import { NextRequest, NextResponse } from 'next/server'

import * as puppeteerService from '@/lib/puppeteer.service'

export const revalidate = 60 * 60 * 24

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }>}) {
  const { path } = await params
  const searchParams = request.nextUrl.searchParams

  const options = {
    width: Number(searchParams.get('width')) || 1200,
    height: Number(searchParams.get('height')) || 630,
  }

  const image = await puppeteerService.capturePage(`${process.env.NEXT_PUBLIC_URL}/${path.join('/')}`, options)

  return new NextResponse(image, { headers: { 'content-type': 'image/png' } })
}