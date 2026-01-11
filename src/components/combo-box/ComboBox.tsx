'use client'

import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

export type Option = {
  value: string
  label: string
}

export function ComboBox({ options, selectOption }: { options: Option[], selectOption: (option: Option) => void }) {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([])
  const inputElement = useRef<HTMLInputElement>(null)
  const optionsRef = useRef<HTMLUListElement>(null)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const val = event.target.value
    setValue(val)

    if (!options?.length) return

    if (val?.length) optionsRef.current?.showPopover()
    else optionsRef.current?.hidePopover()

    setFilteredOptions(options.filter(({ label }) => label.toLocaleLowerCase().startsWith(val.toLocaleLowerCase())))
  }

  const select = useCallback((option: Option) => {
    selectOption(option)
    setDisabled(true)
    setValue(option.label)
    optionsRef.current?.hidePopover()
    setTimeout(() => {
      setValue('')
      setFilteredOptions(options)
      setDisabled(false)
    }, 999)
  }, [selectOption])

  useEffect(() => {
    if (!disabled && filteredOptions.length === 1) {
      select(filteredOptions[0])
    }
  }, [disabled, filteredOptions, selectOption, setValue, setDisabled, setFilteredOptions, options])

  useEffect(() => {
    if (!disabled) inputElement.current?.focus()
  }, [disabled])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') optionsRef.current?.hidePopover()
      if (event.key === 'Enter') {
        const option = filteredOptions.find(({ label }) => label.toLocaleLowerCase() === value.toLocaleLowerCase())
        if (option) select(option)
      }
    }

    inputElement.current?.addEventListener('keydown', handleKeyDown)
    return () => inputElement.current?.removeEventListener('keydown', handleKeyDown)
  }, [filteredOptions, select])

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
        role="combobox"
        aria-expanded={optionsRef.current?.matches(':popover-open') || false}
        aria-controls="options"
        aria-haspopup="listbox"
        aria-autocomplete="list"
      />

      <ul role="listbox" popover="manual" id="options" ref={optionsRef} className="[position-anchor:--input-el] [top:anchor(bottom)] [left:anchor(left)] w-[410px] border border-[#111111] rounded bg-[#333333]">
        {filteredOptions.map((o) => (
          <Option key={o.value} option={o} markedCharacters={value.length} selectOption={select} />
        ))}
      </ul>
    </div >
  )
}

function Option({ option, markedCharacters = 0, selectOption }: { option: Option, markedCharacters?: number, selectOption: (option: Option) => void }) {
  return (
    <li role="option" className="text-[#dddddd] p-1 cursor-pointer" onClick={() => selectOption(option)}>
      <span>
        <mark className="text-[goldenrod] bg-transparent">{option.label.slice(0, markedCharacters)}</mark>
      </span>
      <span>{option.label.slice(markedCharacters)}</span>
    </li>
  )
}