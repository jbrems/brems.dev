'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'

import styles from './ComboBox.module.css'

export type Option = {
  value: string
  label: string
}

export function ComboBox({ options, selectOption }: { options: Option[], selectOption: (option: Option) => void }) {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([])
  const inputElement = useRef<HTMLInputElement>(null)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (!options?.length) return

    if (value?.length) document.getElementById('options')?.showPopover()
    else document.getElementById('options')?.hidePopover()

    setFilteredOptions(options.filter(({ value: option, label }) => option === value || label.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())))
  }, [value, options, setFilteredOptions])

  useEffect(() => {
    if (!disabled && filteredOptions.length === 1) {
      selectOption(filteredOptions[0])
      setValue(filteredOptions[0].label)
      setDisabled(true)
      setTimeout(() => {
        setValue('')
        setDisabled(false)
        setFilteredOptions(options)
      }, 999)
    }
  }, [disabled, filteredOptions, selectOption, setValue, setDisabled, setFilteredOptions, options])

  useEffect(() => {
    if (!disabled) inputElement.current?.focus()
  }, [disabled])

  return <div className={styles.comboBox}>
    <input type="text" onChange={handleInputChange} value={value} placeholder="Keep typing until only one option remains" className={styles.input} ref={inputElement} id="input" disabled={disabled} autoComplete="one-time-code"/>
    <div popover="manual" id="options" className={styles.options} >
      {filteredOptions.map(o => <Option key={o.value} label={o.label} markedCharacters={value.length} />)}
    </div>
  </div>
}

function Option({ label, markedCharacters = 0 }: { label: Option['label'], markedCharacters?: number }) {
  return <div className={styles.option}>
    <span><mark>{label.slice(0, markedCharacters)}</mark></span><span>{label.slice(markedCharacters)}</span>
  </div>
}