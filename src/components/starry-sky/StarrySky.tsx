'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function StarrySky() {
  const [state, setState] = useState({ width: 0, height: 0, starCount: 0 })
  const pathname = usePathname()

  if (typeof window === 'undefined') return null

  useEffect(() => {
    const width = document.documentElement.getBoundingClientRect().width
    const height = document.documentElement.getBoundingClientRect().height
    const starCount = Math.floor((width * height) / 8000)
    setState({ width, height, starCount })
  }, [])


  return <svg key={pathname} height={state.height} width={state.width} viewBox={`0 0 ${state.width} ${state.height}`} fill="goldenrod" className="absolute inset-0 pointer-events-none">
    {new Array(state.starCount).fill(0).map((_, i) => (
      <circle key={pathname + i} cx={Math.random() * state.width} cy={Math.random() * state.height} r={Math.random() * 1.5} />
    ))}
  </svg>
}