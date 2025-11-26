import { IconProps } from '../icons.types'

export function MousePointer({ size = 24, color = '#dddddd', className = '' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-label="Mouse pointer icon">
    <path d="M10,1 l-5,12 l4,-2 V18 h2 V11 l4,2 Z" fill={color} transform="rotate(-22, 10, 10)" />
  </svg>
}
