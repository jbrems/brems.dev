import { screenCaptureSize } from '@/lib/puppeteer.service'
import Base64EncoderView from './view'

export const metadata = {
  title: 'Base64 Encoder',
  description: 'A simple client side tool to encode and decode Base64 values. Also supports Base64url encoding.',
  openGraph: {
    title: 'Base64 Encoder',
    description: 'A simple client side tool to encode and decode Base64 values. Also supports Base64url encoding.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects/base64-encoder?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the project',
    }],
  },
}

export default function Base64EncoderPage() {
  return <Base64EncoderView />
}