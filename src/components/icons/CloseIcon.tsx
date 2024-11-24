import { IconProps } from "./icons.types";

export function CloseIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 10 10" aria-hidden>
    <path d="M2 2 l6 6 M8 2 l-6 6" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </svg>
}