import Pocemon from "@/components/pocemon/Pocemon";
import { getPocemon } from "./ssr.service";

export default async function SsrPage() {
  return <h1>SSR with await, wrapped with Suspense, and using the use hook</h1>
}