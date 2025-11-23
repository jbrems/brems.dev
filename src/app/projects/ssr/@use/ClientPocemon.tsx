'use client'

import Pocemon from "@/components/pocemon/Pocemon"
import { use, useEffect, useState } from "react"

export function ClientPocemon({ pocemonPromise }: { pocemonPromise: Promise<number> }) {
  const pocemon = use(pocemonPromise)
  const [hp, setHp] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHp((hp) => hp + 1)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return <Pocemon id={pocemon} hpPercentage={hp % 100} />
}