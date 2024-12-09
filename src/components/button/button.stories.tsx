import { ReactNode } from 'react'
import { EyeOpenIcon } from '../icons/eye-open-icon/EyeOpenIcon'

export default {
  component: Button,
}

function Button({ children }: { children: ReactNode }) {
  return <button className="button">{children}</button>
}

export const Default = {
  args: {
    children: <span>This is a button!</span>,
  },
}

export const WithIcon = {
  args: {
    children: <><EyeOpenIcon/><span>This one has an icon</span></>,
  },
}