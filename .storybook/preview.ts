import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { initialize as initializeMswAddon, mswLoader } from 'msw-storybook-addon'

import '../src/app/globals.css'

initializeMswAddon()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
  loaders: [mswLoader],
  // tags: ['autodocs'],
};

export default preview;
