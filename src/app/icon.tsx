import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export default function Icon() {
  return new ImageResponse(
    <div style={{ display: 'flex', background: '#222222' }}>
      <div style={{ display: 'flex', fontSize: '32px', background: 'linear-gradient(-10deg, transparent, goldenrod, gold, goldenrod, transparent)', backgroundClip: 'text', color: 'transparent', padding: '3px', marginTop: '-9px' }}>
        B.remsdev
      </div>
    </div>,
    { ...size },
  )
}