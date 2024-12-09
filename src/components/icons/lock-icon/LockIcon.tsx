import { IconProps } from '../icons.types'

export function LockIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10">
    <circle cx="5" cy="4" r="2" stroke={color} fill="transparent" />
    <rect x="2" y="4" width="6" height="4" rx="1" fill={color} />
  </svg>
}