import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const color = searchParams.get('color') || '#daa520aa'
  const size = Number(searchParams.get('size') || 1.5)
  const density = Number(searchParams.get('density') || 0.0002)

  if (density > 0.00125) return new Response('Density too high', { status: 400 })

  const svg = `<svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <g fill="${color}">
      {stars}
    </g>
  </svg>`

  const stars = new Array(1000000 * density).fill(0).map((_, i) => (
    `<circle cx="${Math.random() * 1000}" cy="${Math.random() * 1000}" r="${Math.random() * size}" />`
  ))

  const body = svg.replace('{stars}', stars.join(''))

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400, stale-if-error=86400',
    },
  })
}