import type { StoryObj } from '@storybook/react'

import { LinkedinIcon } from './LinkedinIcon'

export default {
  component: LinkedinIcon,
}

export const Default: StoryObj<typeof LinkedinIcon> = {
  args: {
    size: 24,
    color: '#dddddd',
  },
}
