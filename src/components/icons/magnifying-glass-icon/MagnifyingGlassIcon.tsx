import { IconProps } from '../icons.types'

export function MagnifyingGlassIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10">
    <circle cx="6" cy="4" r="3" stroke={color} fill="transparent" />
    <line x1="1" y1="9" x2="3.5" y2="6.5" strokeWidth="2" stroke={color} strokeLinecap="round" />
  </svg>
}