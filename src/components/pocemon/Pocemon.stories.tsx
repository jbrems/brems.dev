import Pocemon from "./Pocemon";

export default {
  component: Pocemon,
}

export const FullHealth = {
  args: {
    id: 1,
    hidden: true,
    hpPercentage: 100,
    className: '',
  },
}

export const HitOnce = {
  args: {
    id: 1,
    hidden: true,
    hpPercentage: 66,
    className: '',
  },
}

export const HitTwice = {
  args: {
    id: 1,
    hidden: true,
    hpPercentage: 33,
    className: '',
  },
}

export const Fainted = {
  args: {
    id: 1,
    hidden: false,
    hpPercentage: 0,
    className: '',
  },
}