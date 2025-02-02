import { IconProps } from '../icons.types'

export function MenuIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" aria-label="Open menu icon">
    <g stroke={color} strokeLinecap="round">
      <line x1="1" y1="2" x2="9" y2="2" />
      <line x1="1" y1="5" x2="9" y2="5" />
      <line x1="1" y1="8" x2="9" y2="8" />
    </g>
  </svg>
}