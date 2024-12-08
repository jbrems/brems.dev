import { storybook } from "@/app/blog/blog.fixtures";
import { Watermark } from "./Watermark";

export default {
  component: Watermark
}

export const Default = {
  args: {
    blogPost: storybook,
  },
}