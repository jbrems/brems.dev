'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageIcon } from '../icons/image-icon/ImageIcon'

import styles from './ScreenCapture.module.css'

export function ScreenCapture({ path, size, alt, className, ...props }: { path: string, size: 'portrait' | 'square', alt: string, className?: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loading, setLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)

  // Periodically check if the image has been loaded
  // img.onLoad does not fire when the image is loaded from the browser cache
  useEffect(() => {
    const interval = setInterval(() => {
      if (imgRef?.current?.complete) {
        setLoading(false)
        clearInterval(interval)
      }
    }, 100)
    return () => { clearInterval(interval) }
  }, [setLoading])

  return <>
    {loading && <div className={`${styles.loadingPlaceholder} ${className}`}><ImageIcon /></div>}
    <img ref={imgRef} src={`/api/screen-captures${path}?size=${size}`} alt={alt} className={className} {...props} />
  </>
}