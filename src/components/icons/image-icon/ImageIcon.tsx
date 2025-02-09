import { IconProps } from '../icons.types'

export function ImageIcon({ size = 24, color = '#dddddd', className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" className={className} aria-label="Image icon" >
    <g stroke={color} strokeWidth="1" strokeLinecap="round">
      <rect x="1" y="2" width="8" height="6" strokeLinejoin="round" fill="transparent" />
      <circle cx="7" cy="3.5" r="0.5" />
      <line x1="1" y1="5" x2="3" y2="4" />
      <line x1="3" y1="4" x2="6" y2="6" />
      <line x1="6" y1="6" x2="9" y2="5" />
    </g>
  </svg>
}