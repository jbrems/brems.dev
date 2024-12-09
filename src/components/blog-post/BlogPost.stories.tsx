import { storybook } from '@/app/blog/blog.fixtures'
import { BlogPost } from './BlogPost'

export default {
  component: BlogPost,
}

export const Storybook = {
  args: {
    blogPost: storybook,
  },
}