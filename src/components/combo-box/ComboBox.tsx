'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'

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

    setFilteredOptions(options.filter(({ label }) => label.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())))
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

  return (
    <div className="relative w-[410px]">
      <input
        type="text"
        onChange={handleInputChange}
        value={value}
        placeholder="Who's that Pocemon?"
        className="[anchor-name:--input-el] w-full p-2 text-[#dddddd] bg-[#333333] border border-[#bbbbbb] rounded focus-visible:outline-none focus-visible:border-[goldenrod]"
        ref={inputElement}
        id="input"
        disabled={disabled}
        autoComplete="one-time-code"
      />

      <div popover="manual" id="options" className="[position-anchor:--input-el] [top:anchor(bottom)] [left:anchor(left)] w-[410px] border border-[#111111] rounded bg-[#333333]">
        {filteredOptions.map((o) => (
          <Option key={o.value} label={o.label} markedCharacters={value.length} />
        ))}
      </div>
    </div>
  )
}

function Option({ label, markedCharacters = 0 }: { label: Option['label'], markedCharacters?: number }) {
  return (
    <div className="text-[#dddddd] p-1">
      <span>
        <mark className="text-[goldenrod] bg-transparent">{label.slice(0, markedCharacters)}</mark>
      </span>
      <span>{label.slice(markedCharacters)}</span>
    </div>
  )
}