'use client'

import { useInteractiveTorch } from './interactive-torch.hook'
import styles from './InteractiveTorch.module.css'

export function InteractiveTorch() {
  useInteractiveTorch('canvas')

  return <canvas id="canvas" className={styles.interactiveTorch}></canvas>
}