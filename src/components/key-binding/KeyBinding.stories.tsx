import { LumosIcon } from "../icons/lumos-icon/LumosIcon"
import { KeyCap } from "./key-cap/KeyCap"
import { KeyBinding } from "./KeyBinding"

export default {
  component: KeyBinding,
}

export const Lumos = {
  args: {
    children: <><LumosIcon /><span>Lumos</span><KeyCap>L</KeyCap></>,
  },
}

export const Quit = {
  args: {
    children: <><span>Hide overlay</span><KeyCap>Q</KeyCap></>,
  },
}