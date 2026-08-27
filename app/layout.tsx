import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import { GoogleAdsTag } from '@/components/google-ads-tag'
import { JsonLd } from '@/components/json-ld'
import { SITE_URL, SITE_NAME, OG_IMAGE, business, website, graph } from '@/lib/seo'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Studio Rusconi | Igienista dentale e Podologo a Lugano',
    template: '%s | Studio Rusconi Lugano',
  },
  description:
    'Studio Rusconi, Via Nassa 54 a Lugano: igiene dentale professionale, sbiancamento, trattamento parodontale e podologia. Igienista dentale SSS e podologo dipl. federale. Prenota online.',
  applicationName: SITE_NAME,
  keywords: [
    'igienista dentale Lugano',
    'igiene dentale Lugano',
    'pulizia denti Lugano',
    'detartrasi Lugano',
    'sbiancamento denti Lugano',
    'trattamento parodontale Lugano',
    'podologo Lugano',
    'podologia Lugano',
    'unghia incarnita Lugano',
    'cura dei piedi Lugano',
    'Studio Rusconi',
  ],
  openGraph: {
    title: 'Studio Rusconi | Igienista dentale e Podologo a Lugano',
    description: 'Igiene dentale e podologia nel cuore di Lugano. Professionalità, cura e attenzione per ogni paziente.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'it_CH',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Martina e Paolo Rusconi, Studio Rusconi Lugano' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Rusconi | Igienista dentale e Podologo a Lugano',
    description: 'Igiene dentale e podologia nel cuore di Lugano.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#afc4d9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <JsonLd data={graph(business, website)} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
        <GoogleAdsTag />
        <Analytics />
      </body>
    </html>
  )
}
