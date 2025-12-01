import type { Metadata } from 'next'
import './globals.css'
import { Nunito, Source_Code_Pro } from 'next/font/google'
import { SkipToMainContent } from '@/components/skip-to-main-content/SkipToMainContent'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { Analytics } from '@vercel/analytics/next'

const nunito = Nunito({ subsets: ['latin'], weight: ['200', '400', '700', '900'], variable: '--font-sans', display: 'swap' })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: ['200', '400', '700', '900'], variable: '--font-mono', display: 'swap' })

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
    <html lang="en" className={`${nunito.variable} ${sourceCodePro.variable}`}>
      <body>
        <SkipToMainContent />
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
