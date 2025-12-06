import Pocemon from "@/components/pocemon/Pocemon"
import { Suspense } from "react"
import { getPocemon } from "../../ssr.service"
import { ClientPocemon } from "./ClientPocemon"

export const revalidate = 0

export default function SsrUsePage() {
  return <SsrUsePageContent className="flex justify-around" />
}

export function SsrUsePageContent({ className }: { className?: string }) {
  return <ul className={`[&>li]:display-contents ${className}`}>
    <li><Suspense fallback={<Pocemon id={7} hidden />}>
      <ClientPocemon pocemonPromise={getPocemon(7, 1000)} />
    </Suspense></li>
    <li><Suspense fallback={<Pocemon id={8} hidden />}>
      <ClientPocemon pocemonPromise={getPocemon(8, 2000)} />
    </Suspense></li>
    <li><Suspense fallback={<Pocemon id={9} hidden />}>
      <ClientPocemon pocemonPromise={getPocemon(9, 3000)} />
    </Suspense></li>
  </ul>
}
