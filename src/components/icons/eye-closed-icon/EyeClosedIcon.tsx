import { IconProps } from "../icons.types";

export function EyeClosedIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10">
    <path d="M1,5Q5,9,9,5" stroke={color} strokeLinecap="round" />
  </svg>
}