import { IconProps } from '../icons.types'

export function CloseIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" aria-label="Close icon">
    <g stroke={color} strokeLinecap="round">
      <line x1="2" y1="2" x2="8" y2="8" />
      <line x1="8" y1="2" x2="2" y2="8" />
    </g>
  </svg>
}