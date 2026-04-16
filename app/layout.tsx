import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Studio Rusconi | Igiene Dentale e Podologia a Lugano',
  description:
    'Studio Rusconi a Lugano offre servizi di igiene dentale e podologia con un approccio professionale, umano e preciso. Prenota il tuo appuntamento.',
  generator: 'v0.app',
  keywords: [
    'igiene dentale Lugano',
    'podologia Lugano',
    'sbiancamento dentale Lugano',
    'igienista dentale Lugano',
    'podologo Lugano',
    'Studio Rusconi',
    'pulizia denti Lugano',
    'cura dei piedi Lugano',
    'detartrasi Lugano',
    'trattamento parodontale Lugano',
  ],
  openGraph: {
    title: 'Studio Rusconi | Igiene Dentale e Podologia a Lugano',
    description: 'Igiene dentale e podologia nel cuore di Lugano. Professionalità, cura e attenzione per ogni paziente.',
    url: 'https://www.studiorusconi.ch',
    siteName: 'Studio Rusconi',
    locale: 'it_CH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.studiorusconi.ch',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Studio Rusconi',
  description: 'Studio specialistico in igiene dentale e podologia nel cuore di Lugano.',
  url: 'https://www.studiorusconi.ch',
  telephone: '+41912251240',
  email: 'info.studiorusconi@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Nassa 54',
    addressLocality: 'Lugano',
    postalCode: '6900',
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.0037,
    longitude: 8.9511,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  priceRange: '$$',
  availableLanguage: ['Italian', 'German', 'French', 'English'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Igiene dentale professionale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sbiancamento dentale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trattamento parodontale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Podologia' } },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
