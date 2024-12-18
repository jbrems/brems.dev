'use client'

import { ReactNode, useCallback, useRef } from 'react'
import styles from './TextArea.module.css'

export function TextArea({ name, placeholder, children, className, withActions = true }: { name: string, placeholder?: string, children?: ReactNode, className?: string, withActions?: boolean }) {
  return <div className={`${styles.container} ${className}`}>
    <textarea name={name} placeholder={placeholder} className={styles.textArea}>
      {children}
    </textarea>
    {withActions && <TextAreaActions />}
  </div>
}

function TextAreaActions() {
  const elementRef = useRef<HTMLSpanElement>(null)

  const copy = useCallback(() => {
    if (!elementRef.current) return
    const textArea = elementRef.current.parentElement?.getElementsByTagName('textarea')[0]
    if (!textArea) return

    navigator.clipboard.writeText(textArea.value)
  }, [elementRef])

  const format = useCallback(() => {
    if (!elementRef.current) return
    const textArea = elementRef.current.parentElement?.getElementsByTagName('textarea')[0]
    if (!textArea) return

    try {
      textArea.value = formatJSON(textArea.value)
    } catch {}
  }, [elementRef])

  const rawify = useCallback(() => {
    if (!elementRef.current) return
    const textArea = elementRef.current.parentElement?.getElementsByTagName('textarea')[0]
    if (!textArea) return

    try {
      textArea.value = rawifyJSON(textArea.value)
    } catch {}
  }, [elementRef])

  return <span ref={elementRef} className={styles.actions}>
    <button type="button" onClick={rawify} className={styles.action}>Raw</button>
    <button type="button" onClick={format} className={styles.action}>Format</button>
    <button type="button" onClick={copy} className={styles.action}>Copy</button>
  </span>
}

function rawifyJSON(value: string) {
  const json = JSON.parse(stripNewLines(value))
  return JSON.stringify(json)
}

function formatJSON(value: string) {
  const json = JSON.parse(stripNewLines(value))
  return JSON.stringify(json, null, 2)
}

function stripNewLines(value: string): string {
  return value.replace(/\r?\n|\r/g, '')
}