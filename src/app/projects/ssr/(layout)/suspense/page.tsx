import Pocemon from "@/components/pocemon/Pocemon"
import { Suspense } from "react"
import { getPocemon } from "../../ssr.service"

export default function SsrSuspensePage() {
  return <SsrSuspensePageContent className="flex justify-around" />
}

export function SsrSuspensePageContent({ className = '' }: { className?: string }) {
  return <ul className={`[&>li]:display-contents ${className}`}>
    <li><Suspense fallback={<Pocemon id={4} hidden />}>
      <ServerPocemon id={4} sleepMs={1000} />
    </Suspense></li>
    <li><Suspense fallback={<Pocemon id={5} hidden />}>
      <ServerPocemon id={5} sleepMs={2000} />
    </Suspense></li>
    <li><Suspense fallback={<Pocemon id={6} hidden />}>
      <ServerPocemon id={6} sleepMs={3000} />
    </Suspense></li>
  </ul>
}

async function ServerPocemon({ id, sleepMs }: { id: number, sleepMs: number }) {
  const p = await getPocemon(id, sleepMs)

  return <Pocemon id={p} />
}