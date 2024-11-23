import { StoryObj } from "@storybook/react";
import { BlogPostList } from "./BlogPostList";
import { storybook } from "@/app/blog/blog.fixtures";

export default {
  component: BlogPostList,
}

export const Default: StoryObj<typeof BlogPostList> = {
  args: {
    blogPosts: [storybook, storybook, storybook],
  }
}