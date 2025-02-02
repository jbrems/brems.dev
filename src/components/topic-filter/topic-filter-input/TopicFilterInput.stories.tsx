import { MagnifyingGlassIcon } from '@/components/icons/magnifying-glass-icon/MagnifyingGlassIcon'
import { TopicFilterInput } from './TopicFilterInput'

export default {
  component: TopicFilterInput,
}

export const Default = {
  args: {},
}

export const Search = {
  args: {
    children: <MagnifyingGlassIcon />,
    placeholder: 'Search',
  },
}