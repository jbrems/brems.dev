import { screenCaptureSize } from '@/lib/puppeteer.service'
import IvCalculatorView from './view'

export const metadata = {
  title: 'FRLG IV Calculator',
  description: 'A FireRed and LeafGreen styled IV calculator for the original 151 Pokemon.',
  openGraph: {
    title: 'FRLG IV Calculator',
    description: 'A FireRed and LeafGreen styled IV calculator for the original 151 Pokemon.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects/iv-calculator?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the project',
    }],
  },
}

export default function IvCalculatorPage() {
  return <IvCalculatorView />
}
