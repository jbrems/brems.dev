'use client'

import { CopyIcon } from '@/components/icons/copy-icon/CopyIcon'
import styles from './NrnField.module.css'
import { InputField } from '@/components/input-field/InputField'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { completeNrn, formatNrn, uglifyNrn } from '@/lib/nrn.utils'
import { RefreshIcon } from '@/components/icons/refresh-icon/RefreshIcon'

export function NrnField({ className = '' }: { className?: string }) {
  const [userInput, setUserInput] = useState<string>('')
  const [inputError, setInputError] = useState<boolean>(false)
  const [formattedUserInput, setFormattedUserInput] = useState<string>('')
  const [generated, setGenerated] = useState<string>('')
  const [refreshed, setRefreshed] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  function handleInput(event: FormEvent<HTMLInputElement>) {
    setUserInput(uglifyNrn(event.currentTarget.value).substring(0, 9))
  }

  const generateNrn = useCallback(() => {
    const completedNrn = completeNrn(userInput)

    setGenerated(completedNrn?.replace(userInput, '') || '')

    setInputError(completedNrn === null)
  }, [userInput])

  function refresh() {
    generateNrn()
    setRefreshed(true)
    setTimeout(() => setRefreshed(false), 500)
  }

  const copyValue = useCallback(() => {
    navigator?.clipboard?.writeText(userInput + generated)
    setCopied(true)
    setTimeout(() => setCopied(false), 500)
  }, [userInput, generated])

  useEffect(() => {
    const formattedNrn = formatNrn(userInput)
    setFormattedUserInput(formattedNrn)
    generateNrn()
  }, [userInput, generateNrn])

  return <div className={`${styles.nrnField} ${className}`}>
    <InputField className={`${styles.inputField} ${inputError && styles.inputError}`} type="text" value={formattedUserInput} onInput={handleInput}/>
    <div className={styles.nrn}>
      {userInput.split('').map((val, index) => <span key={`user-input-${index}`} className={`${styles.userInput} ${inputError && styles.inputError}`}>{val}</span>)}
      {generated.split('').map((val, index) => <span key={`generated-${index}`}>{val}</span>)}
    </div>
    <div className={styles.actions}>
      <button onClick={refresh} className={`button iconButton ${refreshed && styles.activated}`} title="Refresh"><RefreshIcon color="#dddddd" /></button>
      <button onClick={copyValue} className={`button iconButton ${copied && styles.activated}`} title="Copy value"><CopyIcon color="#dddddd" /></button>
    </div>
  </div>
}