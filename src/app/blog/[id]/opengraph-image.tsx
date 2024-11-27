import { ImageResponse } from "next/og"
import { getBlogPostById } from "../blog.utils"
import fs from 'fs'
import { fileURLToPath } from "url"
import path from 'path'

export default async function OpenGraphImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return null

  const sourceCodePro = fs.promises.readFile(path.join(fileURLToPath(import.meta.url), '../../../../../public/Source_Code_Pro/static/SourceCodePro-Medium.ttf'))

  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#222222' }}>
      <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: '28px', background: 'radial-gradient(ellipse at top left, #222222, transparent), radial-gradient(ellipse at bottom right, #2a2a2a, transparent)', color: 'gold', border: 'solid 1px #555555', borderRadius: '15px', fontVariant: 'small-caps' }}>
        <span style={{ textTransform: 'uppercase', fontVariant: 'small-caps', background: 'linear-gradient(45deg, #daa52020, goldenrod, gold, goldenrod, #daa52020)', backgroundClip: 'text', color: 'transparent' }}>
          {blogPost.topic}
        </span>
        {blogPost.sttp && <span style={{ position: 'absolute', top: '0', right: '0', border: 'solid 1px goldenrod', borderRadius: '0 15px 0 15px', fontSize: '13px', padding: '3px 10px', background: '#daa52020' }}>
          STTP  
        </span>}
        <span style={{ position: 'absolute', bottom: '0', left: '0', border: 'solid 1px goldenrod', borderRadius: '0 15px 0 15px', fontSize: '13px', padding: '3px 8px', background: '#daa52020' }}>
          Brems.dev
        </span>
      </div>
    </div>,
    { 
      width: 120, 
      height: 120,
      fonts: [{ name: 'Source code pro', data: await sourceCodePro, style: 'normal', weight: 400}]
    },
  )
}