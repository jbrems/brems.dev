import { ReactNode } from "react";

export function SvgRaster({ columns = 10, rows = 10, size = 100, color = '#aaa', children }: { columns?: number, rows?: number, size?: number, color?: string, children?: ReactNode }) {
  return <svg width={columns * size} height={columns * size} viewBox={`0 0 ${columns * size} ${rows * size}`}>
    {Array(rows + 1).fill(0).map((_, i) => <line x1="0" y1={i * size} x2={columns * size} y2={i * size} stroke={color} />)}
    {Array(columns + 1).fill(0).map((_, i) => <line x1={i * size} y1="0" x2={i * size} y2={rows * size} stroke={color} />)}
  </svg>
}