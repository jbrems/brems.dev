import { StoryObj } from "@storybook/react";
import { Project } from "./Project";

export default {
  component: Project,
}

export const Presentr: StoryObj<typeof Project> = {
  args: {
    url: '/projects/presentr',
    coverImageUrl: '/presenting.jpeg',
    title: 'Presentr',
    children: <>
      <p>Present your photos with style!</p>
      <p>Implements the Google Photos Picker OAuth APIs.</p>
    </>,
  },
}