'use client'

import { useState } from 'react'
import { ImageIcon } from '../icons/image-icon/ImageIcon'

import styles from './ScreenCapture.module.css'

export function ScreenCapture({ path, size, alt, className, ...props }: { path: string, size: 'portrait' | 'square', alt: string, className?: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loading, setLoading] = useState(true)

  function handleLoad() {
    setLoading(false)
  }

  return <>
    {loading && <div className={`${styles.loadingPlaceholder} ${className}`}><ImageIcon /></div>}
    <img src={`/api/screen-captures${path}?size=${size}`} onLoad={handleLoad} alt={alt} className={className} {...props} />
  </>
}