import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Super Plumbing & Electrical Services | Tlhabane, Rustenburg',
  description:
    'Professional plumbing and electrical solutions in Tlhabane and greater Rustenburg. Geyser installations, leak repairs, wiring, distribution boards and more. Call 076 222 2862.',
  keywords: [
    'plumbing Tlhabane',
    'electrician Rustenburg',
    'geyser installation',
    'leak repair',
    'electrical wiring',
    'Super Plumbing and Electrical Services',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Super Plumbing & Electrical Services',
    description:
      'Professional plumbing and electrical solutions in Tlhabane, Rustenburg. Reliable, qualified, and local.',
    type: 'website',
    locale: 'en_ZA',
  },
}

export const viewport: Viewport = {
  themeColor: '#14161c',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
