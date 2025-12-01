import Pocemon from "@/components/pocemon/Pocemon";
import { getPocemon } from "../../ssr.service";

export default function SsrAwaitPage() {
  return <SsrAwaitPageContent className="flex justify-around" />
}

export async function SsrAwaitPageContent({ className = '' }: { className?: string }) {
  const p = await Promise.all([
    getPocemon(1, 1000),
    getPocemon(2, 2000),
    getPocemon(3, 3000),
  ])

  return <ul className={`[&>li]:display-contents ${className}`}>
    <li><Pocemon id={p[0]} /></li>
    <li><Pocemon id={p[1]} /></li>
    <li><Pocemon id={p[2]} /></li>
  </ul>
}