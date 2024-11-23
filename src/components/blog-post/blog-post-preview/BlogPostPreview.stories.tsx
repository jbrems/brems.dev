import { StoryObj } from "@storybook/react";
import { BlogPostPreview } from "./BlogPostPreview";
import { storybook } from "@/app/blog/blog.fixtures";

export default {
  component: BlogPostPreview,
}

export const Storybook: StoryObj<typeof BlogPostPreview> = {
  args: {
    blogPost: storybook,
  }
}