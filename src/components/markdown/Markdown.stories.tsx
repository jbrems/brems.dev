import { storybook } from "@/app/blog/blog.fixtures";
import { Markdown } from "./Markdown";

export default {
  component: Markdown,
}

export const Storybook = {
  args: {
    content: storybook.content,
  }
}