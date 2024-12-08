import { StoryObj } from "@storybook/react";
import { BlogPostHeader } from "./BlogPostHeader";
import { storybook } from "@/app/blog/blog.fixtures";

export default {
  component: BlogPostHeader,
}

export const Storybook: StoryObj<typeof BlogPostHeader> = {
  args: {
    blogPost: storybook,
  }
}