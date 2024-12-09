import { IconProps } from '../icons.types'

export function EyeOpenIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10">
    <path d="M1,5Q5,1,9,5" stroke={color} strokeLinecap="round" />
    <circle cx="5" cy="5" r="1.5" stroke={color} />
  </svg>
}