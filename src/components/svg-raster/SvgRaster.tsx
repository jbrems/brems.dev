import React, { ReactNode, useId } from "react";

export function SvgRaster({ columns = 10, rows = 10, size = 30, color = '#aaa', children, className }: { columns?: number, rows?: number, size?: number, color?: string, children?: ReactNode, className?: string }) {
  const clipPathId = useId()

  return <svg width={columns * size + 35} height={rows * size + 40} viewBox={`-15 -15 ${columns * size + 20} ${rows * size + 25}`} className={className}>
    <clipPath id={clipPathId}>
      <rect x="0" y="0" width={columns * size} height={rows * size} />
    </clipPath>

    <g clipPath={`url(#${clipPathId})`}>
      {React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child, { rasterSize: size } as any) : child)}
    </g>

    {Array(rows + 1).fill(0).map((_, i) => (
      <g key={`row-${i}`}>
        <text x="-6" y={i * size + 3} fontSize={size / 3} fill={color} textAnchor="end">{i}</text>
        <line x1="0" y1={i * size} x2={columns * size} y2={i * size} stroke={color} />
      </g>
    ))}

    {Array(columns + 1).fill(0).map((_, i) => (
      <g key={`column-${i}`}>
        <text x={i * size} y={-8} fontSize={size / 3} fill={color} textAnchor="middle">{i}</text>
        <line x1={i * size} y1="0" x2={i * size} y2={rows * size} stroke={color} />
      </g>
    ))}
  </svg>
}

export function SvgRasterPoint({ x, y, color = '#00FF00', rasterSize = 30 }: { x: number, y: number, color?: string, rasterSize?: number }) {
  return <g>
    <circle cx={x * rasterSize} cy={y * rasterSize} r={rasterSize / 4} fill={color} />
    <text x={x * rasterSize} y={y * rasterSize + rasterSize * 0.7} fontSize={rasterSize / 2} fill={color} textAnchor="middle">{`(${x}, ${y})`}</text>
  </g>
}

export function SvgRasterLine({ x1, y1, x2, y2, color = 'goldenrod', rasterSize = 30 }: { x1: number, y1: number, x2: number, y2: number, color?: string, rasterSize?: number }) {
  return (
    <line
      x1={x1 * rasterSize}
      y1={y1 * rasterSize}
      x2={x2 * rasterSize}
      y2={y2 * rasterSize}
      stroke={color}
      strokeWidth={rasterSize}
      strokeLinecap="round"
    />
  )
}