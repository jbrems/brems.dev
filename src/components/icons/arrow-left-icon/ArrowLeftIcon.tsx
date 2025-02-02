import { IconProps } from '../icons.types'

export function ArrowLeftIcon({ size = 24, color = '#dddddd', className }: IconProps) {
  return <svg width={size} height={size} className={className} viewBox="0 0 10 10" aria-label="Arrow left icon">
    <g  stroke={color} strokeLinecap="round">
      <line x1="1" y1="5" x2="4" y2="3" />
      <line x1="1" y1="5" x2="9" y2="5" />
      <line x1="1" y1="5" x2="4" y2="7" />
    </g>
  </svg>
}