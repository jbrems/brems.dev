'use client'

import Pocemon from '@/components/pocemon/Pocemon'
import styles from './WhosThatPocemonGame.module.css'
import { getFirstGenPocemonNames, getRandomPocemonId } from '@/lib/pocemon.utils'
import { ComboBox, Option } from '@/components/combo-box/ComboBox'
import { useEffect, useRef, useState } from 'react'

export function WhosThatPocemonGame() {
  const [status, setStatus] = useState('')
  const [id, setId] = useState(132)
  const [name, setName] = useState('Ditto')
  const [hidden, setHidden] = useState(true)
  const [lives, setLives] = useState(3)
  const exclusions = useRef([18, 46, 140, 151]) // Pidgeot, Paras, Kabuto, and Mew are substrings of Pidgeotto, Parasect, Kabutops, and Mewtwo, and cannot be used with the current ComboBox

  function handleSelectOption(option: Option) {
    if (option.value !== id + '') {
      setLives((lives) => lives - 1)
      return
    }

    setStatus(`It's ${name}!`)
    setHidden(false)
    exclusions.current.push(id)

    pickNewPocemon()
  }

  function pickNewPocemon() {
    setTimeout(() => {
      setStatus('')
      setHidden(true)
      setId(getRandomPocemonId(exclusions.current))
      setLives(3)
    }, 1001)
  }

  useEffect(() => {
    setId(getRandomPocemonId(exclusions.current))
  }, [setId, exclusions])

  useEffect(() => {
    setName(getFirstGenPocemonNames()[id])
  }, [id, setName])

  useEffect(() => {
    if (lives === 0) {
      setStatus(`${name} fainted!`)
      setHidden(false)
      pickNewPocemon()
    }
  }, [lives, name, setHidden])

  return <div className={styles.whosThatPocemonGame}>
    <p className={styles.status}>{status}</p>
    <Pocemon id={id} hpPercentage={lives * 33.3} hidden={hidden} />
    <ComboBox options={getFirstGenPocemonNames().map((n, i) => ({ value: i + '', label: n })).slice(1)} selectOption={handleSelectOption} />
  </div>
}