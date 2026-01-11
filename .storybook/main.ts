import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.tsx", 
    "../src/components/**/*.mdx", 
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ['../public'],
}

export default config
