'use client'
import { RefreshIcon } from "@/components/icons/refresh-icon/RefreshIcon"
import { useLinkStatus } from "next/link"

export function LinkSpinner() {
  const { pending } = useLinkStatus()

  if (!pending) return null

  return <RefreshIcon className="animate-spin" />
}