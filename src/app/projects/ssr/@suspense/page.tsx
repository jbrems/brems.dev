import Pocemon from "@/components/pocemon/Pocemon"
import { Suspense } from "react"
import { getPocemon } from "../ssr.service"

export default async function SsrSuspensePage() {
  return < ul >
    <li><Suspense fallback={<Pocemon id={4} hidden />}><ServerPocemon id={4} sleepMs={500} /></Suspense></li>
    <li><Suspense fallback={<Pocemon id={5} hidden />}><ServerPocemon id={5} sleepMs={1000} /></Suspense></li>
    <li><Suspense fallback={<Pocemon id={6} hidden />}><ServerPocemon id={6} sleepMs={1500} /></Suspense></li>
  </ul >
}

async function ServerPocemon({ id, sleepMs }: { id: number, sleepMs: number }) {
  const p = await getPocemon(id, sleepMs)

  return <Pocemon id={p} />
}