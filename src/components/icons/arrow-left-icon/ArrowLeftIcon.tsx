import { IconProps } from "../icons.types";

export function ArrowLeftIcon({ size = 24, color = '#dddddd' }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 10 10" aria-label="Arrow left icon">
    <path d="M1 5 l3 -2 M1 5 l3 2 M1 5 h8" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </svg>
}