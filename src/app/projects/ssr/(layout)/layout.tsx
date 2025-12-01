import { ArrowLeftIcon } from "@/components/icons/arrow-left-icon/ArrowLeftIcon";
import Link from "next/link";

export default function SsrLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">
    <Link href="/projects/ssr" className="flex items-center gap-1"><ArrowLeftIcon /> Back</Link >
    {children}
  </div>
}