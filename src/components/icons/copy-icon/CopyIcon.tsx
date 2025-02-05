import { IconProps } from '../icons.types'

export function CopyIcon({ size = 24, color = '#dddddd', className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" className={className} aria-label="Copy">
    <g stroke={color} strokeLinecap="round">
      <rect x="2" y="3" width="4" height="6" fill="transparent" strokeLinejoin='round' />
      <line x1="4" y1="1" x2="8" y2="1" />
      <line x1="4" y1="1" x2="4" y2="3" />
      <line x1="8" y1="1" x2="8" y2="7" />
      <line x1="6" y1="7" x2="8" y2="7" />
    </g>
  </svg>
}