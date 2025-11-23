import Pocemon from "@/components/pocemon/Pocemon";
import { getPocemon } from "../ssr.service";

export default async function SsrAwaitPage() {
  const p = await Promise.all([getPocemon(1, 500), getPocemon(2, 1000), getPocemon(3, 1500)]);

  return <ul>
    <li><Pocemon id={p[0]} /></li>
    <li><Pocemon id={p[1]} /></li>
    <li><Pocemon id={p[2]} /></li>
  </ul>
}