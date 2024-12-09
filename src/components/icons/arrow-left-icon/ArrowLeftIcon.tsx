import { IconProps } from '../icons.types'

export function ArrowLeftIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" aria-label="Arrow left icon">
    <line x1="1" y1="5" x2="4" y2="3" stroke={color} strokeLinecap="round" />
    <line x1="1" y1="5" x2="9" y2="5" stroke={color} strokeLinecap="round" />
    <line x1="1" y1="5" x2="4" y2="7" stroke={color} strokeLinecap="round" />
  </svg>
}