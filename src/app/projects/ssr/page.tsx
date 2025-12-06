import Link from "next/link";
import { SsrAwaitPageContent } from "./(layout)/await/page";
import { SsrSuspensePageContent } from "./(layout)/suspense/page";
import { SsrUsePageContent } from "./(layout)/use/page";
import { Suspense } from "react";
import { LinkSpinner } from "./LinkSpinner";

export const revalidate = 0

export default async function SsrPage() {
  return <>
    <h1>Next SSR - Server Side Rendering</h1>
    <div className="flex justify-around">
      <section>
        <h2 className="text-center">
          <Link href="ssr/await" prefetch={false} className="flex items-center gap-1">Await <LinkSpinner /></Link>
        </h2>
        <Suspense fallback={<div className="w-[200px]"></div>}>
          <SsrAwaitPageContent />
        </Suspense>
      </section>
      <section>
        <h2 className="text-center">
          <Link href="ssr/suspense">Suspense</Link>
        </h2>
        <SsrSuspensePageContent />
      </section>
      <section>
        <h2 className="text-center">
          <Link href="ssr/use">Use</Link>
        </h2>
        <SsrUsePageContent />
      </section>
    </div>
  </>
}

