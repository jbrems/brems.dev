import Pocemon from "@/components/pocemon/Pocemon"
import { Suspense } from "react"
import { getPocemon } from "../ssr.service"
import { ClientPocemon } from "./ClientPocemon"

export default function SsrUsePage() {
  return <ul>
    <li><Suspense fallback={<Pocemon id={7} hidden />}><ClientPocemon pocemonPromise={getPocemon(7, 500)} /></Suspense></li>
    <li><Suspense fallback={<Pocemon id={8} hidden />}><ClientPocemon pocemonPromise={getPocemon(8, 1000)} /></Suspense></li>
    <li><Suspense fallback={<Pocemon id={9} hidden />}><ClientPocemon pocemonPromise={getPocemon(9, 1500)} /></Suspense></li>
  </ul>
}
