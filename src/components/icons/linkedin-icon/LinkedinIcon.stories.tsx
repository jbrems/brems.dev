import type { StoryObj } from '@storybook/nextjs-vite'

import { LinkedinIcon } from './LinkedinIcon'

export default {
  component: LinkedinIcon,
}

export const Default: StoryObj<typeof LinkedinIcon> = {
  args: {
    size: 100,
    color: '#dddddd',
  },
}
