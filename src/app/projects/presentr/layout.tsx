import { ReactNode } from "react";
import { PresentrProvider } from "./presentr-provider";

export default function PresentrLayout({ children }: { children: ReactNode }) {
  return <PresentrProvider>{children}</PresentrProvider>
}