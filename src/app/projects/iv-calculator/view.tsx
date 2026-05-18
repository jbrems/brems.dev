'use client'

import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import pokemonData from './pokemon-data.json'
import styles from './page.module.css'

type StatKey = 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed'

type Stats = Record<StatKey, number>

type Pokemon = {
  id: number
  name: string
  baseStats: Stats
  evYield: Stats
}

type Nature = {
  name: string
  increased?: Exclude<StatKey, 'hp'>
  decreased?: Exclude<StatKey, 'hp'>
}

type Place = {
  name: string
  pokemon: string[]
}

type StoredPokemon = {
  level: number
  nature: string
  stats: Stats
  defeated: Record<string, number>
}

const statLabels: Record<StatKey, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  specialAttack: 'Sp. Attack',
  specialDefense: 'Sp. Defense',
  speed: 'Speed',
}

const emptyStats: Stats = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
}

const natures: Nature[] = [
  { name: 'Hardy' },
  { name: 'Lonely', increased: 'attack', decreased: 'defense' },
  { name: 'Brave', increased: 'attack', decreased: 'speed' },
  { name: 'Adamant', increased: 'attack', decreased: 'specialAttack' },
  { name: 'Naughty', increased: 'attack', decreased: 'specialDefense' },
  { name: 'Bold', increased: 'defense', decreased: 'attack' },
  { name: 'Docile' },
  { name: 'Relaxed', increased: 'defense', decreased: 'speed' },
  { name: 'Impish', increased: 'defense', decreased: 'specialAttack' },
  { name: 'Lax', increased: 'defense', decreased: 'specialDefense' },
  { name: 'Timid', increased: 'speed', decreased: 'attack' },
  { name: 'Hasty', increased: 'speed', decreased: 'defense' },
  { name: 'Serious' },
  { name: 'Jolly', increased: 'speed', decreased: 'specialAttack' },
  { name: 'Naive', increased: 'speed', decreased: 'specialDefense' },
  { name: 'Modest', increased: 'specialAttack', decreased: 'attack' },
  { name: 'Mild', increased: 'specialAttack', decreased: 'defense' },
  { name: 'Quiet', increased: 'specialAttack', decreased: 'speed' },
  { name: 'Bashful' },
  { name: 'Rash', increased: 'specialAttack', decreased: 'specialDefense' },
  { name: 'Calm', increased: 'specialDefense', decreased: 'attack' },
  { name: 'Gentle', increased: 'specialDefense', decreased: 'defense' },
  { name: 'Sassy', increased: 'specialDefense', decreased: 'speed' },
  { name: 'Careful', increased: 'specialDefense', decreased: 'specialAttack' },
  { name: 'Quirky' },
]

const fireRedOnly = ['Ekans', 'Arbok', 'Oddish', 'Gloom', 'Vileplume', 'Growlithe', 'Arcanine', 'Psyduck', 'Golduck', 'Shellder', 'Cloyster', 'Electabuzz', 'Scyther']
const leafGreenOnly = ['Sandshrew', 'Sandslash', 'Vulpix', 'Ninetales', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Slowpoke', 'Slowbro', 'Staryu', 'Starmie', 'Magmar', 'Pinsir']

const places: Place[] = [
  { name: 'Pallet Town', pokemon: ['Bulbasaur', 'Charmander', 'Squirtle', 'Magikarp', 'Poliwag', 'Tentacool'] },
  { name: 'Route 1', pokemon: ['Pidgey', 'Rattata'] },
  { name: 'Viridian City', pokemon: ['Poliwag', 'Magikarp', 'Tentacool'] },
  { name: 'Route 22', pokemon: ['Rattata', 'Spearow', 'Mankey', 'Nidoran F', 'Nidoran M'] },
  { name: 'Route 2', pokemon: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pikachu'] },
  { name: 'Route 2 Gate', pokemon: ['Mr. Mime'] },
  { name: 'Viridian Forest', pokemon: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pikachu'] },
  { name: 'Pewter City', pokemon: ['Aerodactyl'] },
  { name: 'Route 3', pokemon: ['Pidgey', 'Spearow', 'Jigglypuff', 'Mankey', 'Nidoran F', 'Nidoran M'] },
  { name: 'Mt. Moon', pokemon: ['Zubat', 'Geodude', 'Paras', 'Clefairy', 'Omanyte', 'Kabuto'] },
  { name: 'Route 4', pokemon: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Magikarp'] },
  { name: 'Cerulean City', pokemon: ['Jynx', 'Magikarp', 'Poliwag', 'Goldeen'] },
  { name: 'Route 24', pokemon: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Oddish', 'Bellsprout', 'Abra'] },
  { name: 'Route 25', pokemon: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Oddish', 'Bellsprout', 'Abra'] },
  { name: 'Route 5', pokemon: ['Pidgey', 'Meowth', 'Oddish', 'Bellsprout', 'Mankey'] },
  { name: 'Route 6', pokemon: ['Pidgey', 'Meowth', 'Oddish', 'Bellsprout', 'Mankey', 'Magikarp', 'Poliwag', 'Goldeen'] },
  { name: 'Vermilion City', pokemon: ['Farfetch\'d', 'Magikarp', 'Poliwag', 'Shellder', 'Staryu'] },
  { name: 'Diglett\'s Cave', pokemon: ['Diglett', 'Dugtrio'] },
  { name: 'Route 11', pokemon: ['Spearow', 'Drowzee', 'Ekans', 'Sandshrew'] },
  { name: 'Route 9', pokemon: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Voltorb'] },
  { name: 'Route 10', pokemon: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Voltorb', 'Magikarp', 'Poliwag', 'Goldeen'] },
  { name: 'Rock Tunnel', pokemon: ['Zubat', 'Geodude', 'Machop', 'Onix'] },
  { name: 'Power Plant', pokemon: ['Pikachu', 'Magnemite', 'Magneton', 'Voltorb', 'Electrode', 'Electabuzz', 'Zapdos'] },
  { name: 'Pokemon Tower', pokemon: ['Gastly', 'Haunter', 'Cubone'] },
  { name: 'Route 8', pokemon: ['Pidgey', 'Meowth', 'Growlithe', 'Vulpix', 'Abra', 'Kadabra'] },
  { name: 'Route 7', pokemon: ['Pidgey', 'Meowth', 'Growlithe', 'Vulpix', 'Oddish', 'Bellsprout'] },
  { name: 'Saffron City', pokemon: ['Hitmonlee', 'Hitmonchan', 'Lapras'] },
  { name: 'Celadon City', pokemon: ['Eevee', 'Abra', 'Clefairy', 'Dratini', 'Scyther', 'Pinsir', 'Porygon', 'Magikarp', 'Poliwag'] },
  { name: 'Route 16', pokemon: ['Rattata', 'Raticate', 'Doduo', 'Spearow', 'Snorlax'] },
  { name: 'Route 17', pokemon: ['Rattata', 'Raticate', 'Doduo', 'Fearow'] },
  { name: 'Route 18', pokemon: ['Rattata', 'Raticate', 'Doduo', 'Fearow', 'Lickitung'] },
  { name: 'Route 12', pokemon: ['Pidgey', 'Oddish', 'Gloom', 'Bellsprout', 'Weepinbell', 'Venonat', 'Snorlax', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacool', 'Horsea', 'Krabby'] },
  { name: 'Route 13', pokemon: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Bellsprout', 'Weepinbell', 'Venonat', 'Ditto', 'Magikarp', 'Poliwag', 'Goldeen'] },
  { name: 'Route 14', pokemon: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Bellsprout', 'Weepinbell', 'Venonat', 'Ditto'] },
  { name: 'Route 15', pokemon: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Bellsprout', 'Weepinbell', 'Venonat', 'Ditto'] },
  { name: 'Fuchsia City', pokemon: ['Magikarp', 'Gyarados', 'Poliwag', 'Goldeen', 'Seaking'] },
  { name: 'Safari Zone', pokemon: ['Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino', 'Paras', 'Parasect', 'Venonat', 'Exeggcute', 'Rhyhorn', 'Chansey', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros', 'Magikarp', 'Dratini', 'Dragonair', 'Psyduck', 'Slowpoke', 'Goldeen', 'Seaking'] },
  { name: 'Route 19', pokemon: ['Tentacool', 'Tentacruel', 'Horsea', 'Krabby', 'Shellder', 'Staryu'] },
  { name: 'Seafoam Islands', pokemon: ['Zubat', 'Golbat', 'Psyduck', 'Slowpoke', 'Seel', 'Dewgong', 'Shellder', 'Staryu', 'Krabby', 'Kingler', 'Articuno'] },
  { name: 'Route 20', pokemon: ['Tentacool', 'Tentacruel', 'Horsea', 'Krabby', 'Shellder', 'Staryu'] },
  { name: 'Cinnabar Island', pokemon: ['Tangela', 'Omanyte', 'Kabuto', 'Aerodactyl', 'Magikarp', 'Horsea', 'Krabby', 'Shellder', 'Staryu'] },
  { name: 'Pokemon Mansion', pokemon: ['Rattata', 'Raticate', 'Growlithe', 'Vulpix', 'Ponyta', 'Koffing', 'Weezing', 'Grimer', 'Muk', 'Ditto', 'Magmar'] },
  { name: 'Route 21', pokemon: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tangela', 'Tentacool', 'Tentacruel', 'Horsea', 'Krabby', 'Shellder', 'Staryu'] },
  { name: 'Route 23', pokemon: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Ditto', 'Mankey', 'Primeape', 'Psyduck', 'Slowpoke'] },
  { name: 'Victory Road', pokemon: ['Machop', 'Machoke', 'Geodude', 'Graveler', 'Onix', 'Golbat', 'Marowak', 'Moltres'] },
  { name: 'Cerulean Cave', pokemon: ['Golbat', 'Primeape', 'Venomoth', 'Kadabra', 'Magneton', 'Dodrio', 'Hypno', 'Ditto', 'Electrode', 'Marowak', 'Rhydon', 'Chansey', 'Wobbuffet', 'Mewtwo'] },
]

const storageKey = 'frlg-iv-calculator'
const statKeys = Object.keys(statLabels) as StatKey[]
const pokemon = pokemonData as Pokemon[]
const pokemonByName = new Map(pokemon.map((p) => [p.name, p]))

function createDefaultPokemon(): StoredPokemon {
  return {
    level: 5,
    nature: 'Hardy',
    stats: {
      hp: 20,
      attack: 10,
      defense: 10,
      specialAttack: 10,
      specialDefense: 10,
      speed: 10,
    },
    defeated: {},
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value || 0, min), max)
}

function getNatureModifier(nature: Nature, stat: StatKey) {
  if (stat === 'hp') return 1
  if (nature.increased === stat) return 1.1
  if (nature.decreased === stat) return 0.9
  return 1
}

function getStatValue(base: number, iv: number, ev: number, level: number, stat: StatKey, nature: Nature) {
  if (stat === 'hp') return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10

  const raw = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5
  return Math.floor(raw * getNatureModifier(nature, stat))
}

function getEstimatedEvs(defeated: Record<string, number>) {
  return Object.entries(defeated).reduce((evs, [name, count]) => {
    const defeatedPokemon = pokemonByName.get(name)
    if (!defeatedPokemon) return evs

    statKeys.forEach((stat) => {
      evs[stat] += defeatedPokemon.evYield[stat] * count
    })

    return evs
  }, { ...emptyStats })
}

function getCappedEvs(evs: Stats) {
  const capped = { ...emptyStats }
  let remaining = 510

  statKeys.forEach((stat) => {
    const value = Math.min(evs[stat], 252, remaining)
    capped[stat] = value
    remaining -= value
  })

  return capped
}

function getIvRange(selectedPokemon: Pokemon, stored: StoredPokemon, stat: StatKey, evs: Stats, nature: Nature) {
  const target = stored.stats[stat]
  const estimatedEv = evs[stat]
  const margin = Math.max(8, Math.ceil(estimatedEv * 0.15))
  const evMin = clamp(estimatedEv - margin, 0, 252)
  const evMax = clamp(estimatedEv + margin, 0, 252)
  const possibleIvs: number[] = []

  for (let iv = 0; iv <= 31; iv++) {
    for (let ev = evMin; ev <= evMax; ev += 4) {
      if (getStatValue(selectedPokemon.baseStats[stat], iv, ev, stored.level, stat, nature) === target) {
        possibleIvs.push(iv)
        break
      }
    }
  }

  if (!possibleIvs.length) return 'No match'

  const min = Math.min(...possibleIvs)
  const max = Math.max(...possibleIvs)
  return min === max ? `${min}` : `${min} - ${max}`
}

function getExclusiveMarker(name: string) {
  if (fireRedOnly.includes(name)) return '🔥'
  if (leafGreenOnly.includes(name)) return '🍃'
  return ''
}

export default function IvCalculatorView() {
  const [selectedPokemonName, setSelectedPokemonName] = useState('Bulbasaur')
  const [storedPokemon, setStoredPokemon] = useState<Record<string, StoredPokemon>>({})
  const selectedPokemon = pokemonByName.get(selectedPokemonName) || pokemon[0]
  const current = storedPokemon[selectedPokemon.name] || createDefaultPokemon()
  const selectedNature = natures.find(({ name }) => name === current.nature) || natures[0]
  const estimatedEvs = useMemo(() => getCappedEvs(getEstimatedEvs(current.defeated)), [current.defeated])

  useEffect(() => {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return

    try {
      setStoredPokemon(JSON.parse(raw))
    } catch {
      localStorage.removeItem(storageKey)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storedPokemon))
  }, [storedPokemon])

  function updateCurrent(next: Partial<StoredPokemon>) {
    setStoredPokemon((values) => ({
      ...values,
      [selectedPokemon.name]: {
        ...createDefaultPokemon(),
        ...values[selectedPokemon.name],
        ...next,
      },
    }))
  }

  function updateStat(stat: StatKey, value: number) {
    updateCurrent({
      stats: {
        ...current.stats,
        [stat]: clamp(value, 1, 999),
      },
    })
  }

  function updateDefeated(name: string, count: number) {
    updateCurrent({
      defeated: {
        ...current.defeated,
        [name]: clamp(count, 0, 999),
      },
    })
  }

  function selectPokemon(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value
    if (pokemonByName.has(name)) setSelectedPokemonName(name)
  }

  return <main className={styles.ivCalculator}>
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <p>POKEMON</p>
        <h1>FRLG IV Calculator</h1>
      </div>

      <label className={styles.field}>
        <span>Pokemon</span>
        <input list="pokemon-list" value={selectedPokemonName} onChange={selectPokemon} />
        <datalist id="pokemon-list">
          {pokemon.map(({ id, name }) => <option key={id} value={name} />)}
        </datalist>
      </label>

      <div className={styles.spriteBox}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`} alt={selectedPokemon.name} />
        <div>
          <p>No. {selectedPokemon.id.toString().padStart(3, '0')}</p>
          <strong>{selectedPokemon.name} {getExclusiveMarker(selectedPokemon.name)}</strong>
        </div>
      </div>

      <div className={styles.inputGrid}>
        <Stepper label="Level" value={current.level} min={1} max={100} setValue={(value) => updateCurrent({ level: clamp(value, 1, 100) })} />
        <label className={styles.field}>
          <span>Nature</span>
          <select value={current.nature} onChange={(event) => updateCurrent({ nature: event.target.value })}>
            {natures.map(({ name }) => <option key={name}>{name}</option>)}
          </select>
        </label>
      </div>

      <div className={styles.statsGrid}>
        {statKeys.map((stat) => (
          <Stepper
            key={stat}
            label={statLabels[stat]}
            value={current.stats[stat]}
            min={1}
            max={999}
            setValue={(value) => updateStat(stat, value)}
          />
        ))}
      </div>

      <div className={styles.results}>
        {statKeys.map((stat) => (
          <div key={stat} className={styles.resultRow}>
            <span>{statLabels[stat]}</span>
            <strong>{getIvRange(selectedPokemon, current, stat, estimatedEvs, selectedNature)}</strong>
            <small>EV {estimatedEvs[stat]}</small>
          </div>
        ))}
      </div>
    </section>

    <section className={`${styles.panel} ${styles.routePanel}`}>
      <div className={styles.panelHeader}>
        <p>ENCOUNTERS</p>
        <h2>Defeated Pokemon</h2>
      </div>
      <button className={styles.resetButton} type="button" onClick={() => updateCurrent({ defeated: {} })}>Reset defeated count</button>

      <div className={styles.routes}>
        {places.map((place) => (
          <section key={place.name} className={styles.place}>
            <h3>{place.name}</h3>
            <div className={styles.encounters}>
              {place.pokemon.filter((name) => pokemonByName.has(name)).map((name) => {
                const foundPokemon = pokemonByName.get(name)
                const count = current.defeated[name] || 0

                if (!foundPokemon) return null

                return <article key={`${place.name}-${name}`} className={styles.encounter}>
                  <button type="button" className={styles.encounterName} onClick={() => setSelectedPokemonName(name)}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${foundPokemon.id}.png`} alt="" />
                    <span>{name} {getExclusiveMarker(name)}</span>
                  </button>
                  <div className={styles.counter}>
                    <button type="button" onClick={() => updateDefeated(name, count - 1)} aria-label={`Decrease defeated ${name}`}>-</button>
                    <output>{count}</output>
                    <button type="button" onClick={() => updateDefeated(name, count + 1)} aria-label={`Increase defeated ${name}`}>+</button>
                  </div>
                </article>
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  </main>
}

function Stepper({ label, value, min, max, setValue }: { label: string, value: number, min: number, max: number, setValue: (value: number) => void }) {
  return <label className={styles.stepper}>
    <span>{label}</span>
    <div>
      <button type="button" onClick={() => setValue(clamp(value - 1, min, max))} aria-label={`Decrease ${label}`}>-</button>
      <input type="number" min={min} max={max} value={value} onChange={(event) => setValue(clamp(Number(event.target.value), min, max))} />
      <button type="button" onClick={() => setValue(clamp(value + 1, min, max))} aria-label={`Increase ${label}`}>+</button>
    </div>
  </label>
}
