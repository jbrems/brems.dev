'use client'

import { ArrowLeftIcon } from '@/components/icons/arrow-left-icon/ArrowLeftIcon'
import styles from './page.module.css'
import { TextArea } from '@/components/text-area/TextArea'

export default function Base64Page() {
  function encode(formData: FormData) {
    const plain = formData.get('plain')?.toString()
    if (!plain) return
    const encoded = btoa(plain)
    setInputValue('plain', plain)
    setInputValue('encoded', encoded)
  }

  function urlEncode(formData: FormData) {
    const plain = formData.get('plain')?.toString()
    if (!plain) return
    const encoded = btoa(plain).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
    setInputValue('plain', plain)
    setInputValue('encoded', encoded)
  }

  function decode(formData: FormData) {
    const encoded = formData.get('encoded')?.toString()
    if (!encoded) return
    const decoded = atob(encoded)
    setInputValue('encoded', encoded)
    setInputValue('plain', decoded)
  }

  function setInputValue(inputName: string, value: string) {
    document.getElementsByName(inputName)[0].innerText = value
  }

  return <>
    <h2>Base64 encoder</h2>
    <form className={styles.form}>
      <TextArea name="plain" placeholder="The plain text value to encode" className={styles.textArea}></TextArea>
      <div className={styles.actions}>
        <button className="button" formAction={encode}>Base64 encode <ArrowLeftIcon className="rotate-270" /></button>
        <button className="button" formAction={urlEncode}>Base64url encode <ArrowLeftIcon className="rotate-270" /></button>
        <button className="button" formAction={decode}>Decode <ArrowLeftIcon className="rotate-90" /></button>
      </div>
      <TextArea name="encoded" placeholder="The Base64 encoded value to decode" className={styles.textArea}></TextArea>
    </form>
  </>
}