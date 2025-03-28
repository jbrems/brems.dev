import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '../components/navigation/Navigation'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: {
    template: '<%s /> | Brems.dev',
    default: '</> | Brems.dev',
  },
  description: 'My very own place on the world wide web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
