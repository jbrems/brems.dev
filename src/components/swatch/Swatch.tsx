import { ReactNode, useMemo } from 'react'
import { Stroke } from './swatch.types'

export function Swatch({ children, className, strokesAmount = 4, fixedStrokes }: { children: ReactNode, className?: string, strokesAmount?: number, fixedStrokes?: Stroke[] }) {
  const strokes: Stroke[] = useMemo(() => {
    if (fixedStrokes) return fixedStrokes

    const heightVariance = 0.15
    const offsetVariance = 0.75

    const equalStrokesFactor = 1 / strokesAmount
    let deficit = 0

    return new Array(strokesAmount).fill(0).map((_, index) => {
      const strokeFactor = equalStrokesFactor - heightVariance + Math.random() * heightVariance * 2
      deficit += equalStrokesFactor - strokeFactor
      const remainingStrokes = strokesAmount - index
      const deficitCloser = deficit / remainingStrokes
      deficit -= deficitCloser

      return {
        heightPercentage: ((strokeFactor + deficitCloser) * 100).toFixed(2),
        startOffset: (1 - offsetVariance + Math.random() * offsetVariance).toFixed(2),
        endOffset: (1 - offsetVariance + Math.random() * offsetVariance).toFixed(2),
      }
    })
  }, [strokesAmount, fixedStrokes])


  return <div className={`flex relative ml-[1em] inline-block text-neutral-800 ${className}`}>
    <div className="absolute inset-0 flex flex-col w-0">
      {strokes.map(({ heightPercentage, startOffset }: Stroke, index: number) => (
        <div key={`stroke-${index}-start`} className="bg-yellow-400 rounded-s-full" style={{ height: `${heightPercentage}%`, width: `${startOffset}em`, transform: `translateX(-${startOffset}em)` }}></div>
      ))}
    </div>
    <div className="bg-yellow-400 -mx-0.5 px-1.5 py-1">
      {children}
    </div>
    <div className="absolute inset-0 left-[unset] right-[0px] flex flex-col w-0">
      {strokes.map(({ heightPercentage, endOffset }: Stroke, index: number) => (
        <div key={`stroke-${index}-end`} className="bg-yellow-400 rounded-e-full" style={{ height: `${heightPercentage}%`, width: `${endOffset}em` }}></div>
      ))}
    </div>
  </div>
}
