'use client'

import classNames from 'classnames'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

export type Option = {
  value: string
  label: string
}

export function ComboBox({ options, selectOption }: { options: Option[], selectOption: (option: Option) => void }) {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([])
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1)
  const inputElement = useRef<HTMLInputElement>(null)
  const optionsRef = useRef<HTMLUListElement>(null)

  function isOpen() {
    return optionsRef.current?.matches(':popover-open') || false
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const val = event.target.value
    setValue(val)

    if (!options?.length) return

    if (val?.length) optionsRef.current?.showPopover()
    else optionsRef.current?.hidePopover()

    setFilteredOptions(options.filter(({ label }) => label.toLocaleLowerCase().startsWith(val.toLocaleLowerCase())))
    setSelectedOptionIndex(-1)
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
      setSelectedOptionIndex(-1)
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
        if (selectedOptionIndex >= 0 && selectedOptionIndex < filteredOptions.length) {
          select(filteredOptions[selectedOptionIndex])
        }
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedOptionIndex((prevIndex) => prevIndex + 1 >= filteredOptions.length ? 0 : prevIndex + 1)
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedOptionIndex((prevIndex) => prevIndex - 1 < 0 ? filteredOptions.length - 1 : prevIndex - 1)
      }
    }

    inputElement.current?.addEventListener('keydown', handleKeyDown)
    return () => inputElement.current?.removeEventListener('keydown', handleKeyDown)
  }, [filteredOptions, selectedOptionIndex, select])

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
        aria-expanded={isOpen()}
        aria-controls="options"
        aria-haspopup="listbox"
        aria-autocomplete="list"
        aria-activedescendant={`option-${selectedOptionIndex}`}
      />

      <ul role="listbox" popover="manual" id="options" ref={optionsRef} className="[position-anchor:--input-el] [top:anchor(bottom)] [left:anchor(left)] w-[410px] border border-[#111111] rounded bg-[#333333]">
        {filteredOptions.map((o, i) => (
          <Option key={o.value} id={`option-${i}`} option={o} markedCharacters={value.length} selected={selectedOptionIndex === i || value === o.label} selectOption={select} />
        ))}
      </ul>
    </div >
  )
}

function Option({ id, option, markedCharacters = 0, selected, selectOption }: { id: string, option: Option, markedCharacters?: number, selected: boolean, selectOption: (option: Option) => void }) {
  return (
    <li id={id} aria-current={selected} role="option" className={classNames("text-[#ddd] p-1 cursor-pointer", { 'bg-[goldenrod] text-[#222]!': selected })} onClick={() => selectOption(option)}>
      <span>
        <mark className={classNames("text-[goldenrod] bg-transparent", { 'text-[#ddd]!': selected })}>{option.label.slice(0, markedCharacters)}</mark>
      </span>
      <span>{option.label.slice(markedCharacters)}</span>
    </li>
  )
}