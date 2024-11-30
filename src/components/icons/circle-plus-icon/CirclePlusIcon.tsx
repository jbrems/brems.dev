import { IconProps } from "../icons.types";

export function CirclePlusIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10">
    <circle cx="5" cy="5" r="4.5" stroke={color} fill="transparent" />
    <line x1="3" y1="5" x2="7" y2="5" stroke={color} strokeLinecap="round"/>
    <line x1="5" y1="3" x2="5" y2="7" stroke={color} strokeLinecap="round"/>
  </svg>
}