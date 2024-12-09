import { TopicFilterButton } from './TopicFilterButton'

export default {
  component: TopicFilterButton,
}

export const Visible = {
  args: {
    topic: 'Nextjs',
    visible: true,
    toggle: () => {},
  },
}

export const Hidden = {
  args: {
    topic: 'Nextjs',
    visible: false,
    toggle: () => {},
  },
}