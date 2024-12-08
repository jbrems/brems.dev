import { ReactNode } from "react";

import styles from './KeyBinding.module.css'

export function KeyBinding({ children }: { children: ReactNode | ReactNode[]}) {
  return <div className={styles.keyBinding}>{children}</div>
}