import { IconProps } from '../icons.types'

export function MenuIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" aria-label="Open menu icon">
    <line x1="1" y1="2" x2="9" y2="2" stroke={color} strokeLinecap="round" />
    <line x1="1" y1="5" x2="9" y2="5" stroke={color} strokeLinecap="round" />
    <line x1="1" y1="8" x2="9" y2="8" stroke={color} strokeLinecap="round" />
  </svg>
}