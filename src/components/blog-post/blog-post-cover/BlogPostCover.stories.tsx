import { storybook } from '@/app/blog/blog.fixtures'
import BlogPostCover from './BlogPostCover'
import { StoryObj } from '@storybook/nextjs-vite'

export default {
  component: BlogPostCover,
}

export const Default = {
  args: {
    blogPost: { ...storybook, sttp: false },
    withWatermark: false,
  },
}

export const WithSttpTag = {
  args: {
    blogPost: storybook,
    withWatermark: false,
  },
}

export const WithWatermark: StoryObj<typeof BlogPostCover> = {
  args: {
    blogPost: { ...storybook, sttp: false },
    withWatermark: true,
  },
}

export const WithSttpTagAndWatermark: StoryObj<typeof BlogPostCover> = {
  args: {
    blogPost: storybook,
    withWatermark: true,
  },
}