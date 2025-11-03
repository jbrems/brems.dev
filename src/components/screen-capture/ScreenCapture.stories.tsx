import { ScreenCapture } from './ScreenCapture'
// import { http, HttpResponse } from 'msw'

export default {
  component: ScreenCapture,
}

// const msw = {
//   handlers: [
//     http.get('/api/screen-captures/projects/*', async (mock) => {
//       const searchParams = new URL(mock.request.url).searchParams
//       await new Promise(resolve => setTimeout(resolve, 2500))
//       return HttpResponse.redirect(`https://picsum.photos/400/${searchParams.get('size') === 'portrait' ? 200 : 400}`)
//     }),
//   ],
// }

export const NationalNumberGenerator = {
  args: {
    path: '/projects/national-number-generator',
    size: 'portrait',
    alt: '',
    className: '',
  },
  // parameters: { msw },
}