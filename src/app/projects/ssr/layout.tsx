import { RefreshIcon } from "@/components/icons/refresh-icon/RefreshIcon";
import Link from "next/link";
import { Suspense } from "react";

export default function SsrLayout({ children, ssr, suspense, use }: { children: React.ReactNode, ssr: React.ReactNode, suspense: React.ReactNode, use: React.ReactNode }) {
  return <>
    {children}
    <div className="flex justify-around">
      <Suspense fallback={<div className="flex items-center justify-center w-[200px]"><RefreshIcon className="animate-spin" /></div>}>
        {ssr}
      </Suspense>
      {suspense}
      {use}
    </div>
  </>

}