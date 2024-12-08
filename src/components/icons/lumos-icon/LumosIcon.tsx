import { IconProps } from "../icons.types";

export function LumosIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 20 20">
    <g stroke={color} strokeLinecap="round" strokeWidth="0.5" >
      <line x1="1" y1="6" x2="4" y2="6" />
      <line x1="8" y1="6" x2="11" y2="6" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="6" y1="8" x2="6" y2="11" />
      <line x1="3" y1="3" x2="4" y2="4" />
      <line x1="9" y1="3" x2="8" y2="4" />
      <line x1="3" y1="9" x2="4" y2="8" />
      <path d="M8,8L18,19A0.5,0.5,0,0,0,19,18Z" fill={color} />
    </g>
  </svg>
}