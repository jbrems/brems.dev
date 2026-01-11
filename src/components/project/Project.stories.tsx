import { StoryObj } from '@storybook/nextjs-vite'
import { Project } from './Project'

// import { http, HttpResponse } from 'msw'

// const msw = {
//   handlers: [
//     http.get('/api/screen-captures/projects/*', async (mock) => {
//       const searchParams = new URL(mock.request.url).searchParams
//       await new Promise(resolve => setTimeout(resolve, 2500))
//       return HttpResponse.redirect(`https://picsum.photos/800/${searchParams.get('size') === 'portrait' ? 300 : 800}`)
//     }),
//   ],
// }

export default {
  component: Project,
}

export const Presentr: StoryObj<typeof Project> = {
  args: {
    path: '/projects/presentr',
    title: 'Presentr',
    children: <>
      <p>Present your photos with style!</p>
      <p>Implements the Google Photos Picker OAuth APIs.</p>
    </>,
  },
  // parameters: { msw },
}

export const WhosThatPocemon: StoryObj<typeof Project> = {
  args: {
    path: '/projects/whos-that-pocemon',
    title: 'Who\'s that POCemon?',
    children: <>
      <p>What started as a proof of concept for Next.js caching turned into a standalone project.</p>
      <p>Do you know all 151 original POCemon?</p>
    </>,
  },
  // parameters: { msw },
}