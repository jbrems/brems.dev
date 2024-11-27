import { ImageResponse } from "next/og"

export const runtime = 'edge'

export default async function OpenGraphImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const blogPost = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogposts/${id}`).then(res => res.json())

  if (!blogPost) return null

  const sourceCodePro = fetch(
    new URL('./SourceCodePro-Medium.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '35px', width: '100%', height: '100%', background: 'radial-gradient(ellipse at top left, #2a2a2a, #111111)', padding: '50px' }}>
      <div style={{ position: 'relative', display: 'flex', width: '200px', height: '200px', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at top left, #222222, transparent), radial-gradient(ellipse at bottom right, #2a2a2a, transparent)', color: 'gold', border: 'solid 1px #555555', borderRadius: '25px', fontVariant: 'small-caps' }}>
        <span style={{ fontSize: '40px', textTransform: 'uppercase', fontVariant: 'small-caps', background: 'linear-gradient(45deg, #daa52020, goldenrod, gold, goldenrod, #daa52020)', backgroundClip: 'text', color: 'transparent' }}>
          {blogPost.topic}
        </span>
        {blogPost.sttp && <span style={{ position: 'absolute', top: '0', right: '0', border: 'solid 1px goldenrod', borderRadius: '0 25px 0 25px', fontSize: '20px', padding: '5px 15px', background: '#daa52020' }}>
          STTP  
        </span>}
        <span style={{ position: 'absolute', bottom: '0', left: '0', border: 'solid 1px goldenrod', borderRadius: '0 25px 0 25px', fontSize: '20px', padding: '5px 15px', background: '#daa52020' }}>
          Brems.dev
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <span style={{ color: '#dddddd', fontSize: '50px', maxWidth: '850px' }}>
          {blogPost.title}
        </span>
        <span style={{ color: 'goldenrod', fontSize: '24px', textTransform: 'uppercase', fontVariant: 'small-caps' }}>
          Last updated at {blogPost.updated.split('T')[0]} &nbsp; by Jonas Brems
        </span>
      </div>
    </div>,
    { 
      width: 1200, 
      height: 630,
      fonts: [{ name: 'Source code pro', data: await sourceCodePro, style: 'normal', weight: 400}]
    },
  )
}