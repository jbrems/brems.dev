import { StoryObj } from '@storybook/nextjs-vite'
import { LinkToBlogPost } from './LinkToBlogPost'
import { storybook } from '@/app/blog/blog.fixtures'

export default {
  component: LinkToBlogPost,
}

export const Storybook: StoryObj<typeof LinkToBlogPost> = {
  args: {
    blogPost: storybook,
  },
}