import { IconProps } from "./icons.types";

export function MenuIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 10 10" aria-hidden>
    <path d="M1 2 h8 M1 5 h8 M1 8 h8" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </svg>
}