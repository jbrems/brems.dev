import { IconProps } from '../icons.types'

export function ChevronLeftIcon({ size = 24, color = '#dddddd', className = '' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" className={className}>
    <g  stroke={color} strokeLinecap="round">
      <line x1="7" y1="1" x2="3" y2="5" />
      <line x1="3" y1="5" x2="7" y2="9" />
    </g>
  </svg>
}