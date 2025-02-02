import { IconProps } from '../icons.types'

export function CirclePlusIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 12 12">
    <g stroke={color} strokeLinecap="round">
      <circle cx="6" cy="6" r="5" fill="transparent" />
      <line x1="4" y1="6" x2="8" y2="6"/>
      <line x1="6" y1="4" x2="6" y2="8"/>
    </g>
  </svg>
}