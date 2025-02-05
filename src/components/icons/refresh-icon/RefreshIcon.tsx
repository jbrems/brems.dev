import { IconProps } from '../icons.types'

export function RefreshIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 16 16">
    <g stroke={color} strokeLinecap="round" strokeWidth="1.6">
      <circle cx="8" cy="8" r="5.5" fill="transparent" />
      <line x1="9" y1="2.5" x2="7.5" y2="1" />
      <line x1="9" y1="2.5" x2="7.5" y2="4.3" />
      <line x1="7" y1="13.5" x2="8.5" y2="11.7" />
      <line x1="7" y1="13.5" x2="8.5" y2="15" />
    </g>
  </svg>
}