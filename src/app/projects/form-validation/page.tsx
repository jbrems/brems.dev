import { screenCaptureSize } from '@/lib/puppeteer.service'

export const metadata = {
  title: 'Form Validation',
  description: 'A proof of concept project that implements Angular style form validation in React.',
  openGraph: {
    title: 'Form Validation',
    description: 'A proof of concept project that implements Angular style form validation in React.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects/form-validation?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the project',
    }],
  },
}

export default function FormValidationPage() {
  return <iframe src="https://form-validation-jonas-brems-projects.vercel.app/"></iframe>
}