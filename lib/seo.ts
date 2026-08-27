export const SITE_URL = 'https://www.studiorusconi.ch'
export const SITE_NAME = 'Studio Rusconi'
export const BUSINESS_ID = `${SITE_URL}/#studio`
export const PHONE = '+41912251240'
export const WHATSAPP = '+41765591870'
export const EMAIL = 'info@studiorusconi.ch'
export const BOOKING_URL = 'https://book.agenda.ch/services?companyId=17111'
export const INSTAGRAM_URL = 'https://www.instagram.com/studio_rusconi'
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Via+Nassa+54,+6900+Lugano'
export const OG_IMAGE = '/images/og-studio-rusconi.jpg'
export const GOOGLE_PLACE_ID = 'ChIJv-PApH4thEcROKOdHpeg3pA'
export const GOOGLE_PROFILE_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`
export const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`

export const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Via Nassa 54',
  addressLocality: 'Lugano',
  addressRegion: 'Ticino',
  postalCode: '6900',
  addressCountry: 'CH',
}

export const martina = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#martina-rusconi`,
  name: 'Martina Rusconi',
  jobTitle: 'Igienista dentale SSS',
  worksFor: { '@id': BUSINESS_ID },
  knowsLanguage: ['it', 'fr'],
  alumniOf: 'Università di Ginevra',
}

export const paolo = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#paolo-rusconi`,
  name: 'Paolo Rusconi',
  jobTitle: 'Podologo dipl. federale',
  worksFor: { '@id': BUSINESS_ID },
  knowsLanguage: ['it', 'fr', 'de', 'en'],
}

export const business = {
  '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  alternateName: 'Studio Rusconi Lugano - Igiene dentale e Podologia',
  description:
    'Studio di igiene dentale e podologia in Via Nassa a Lugano. Igienista dentale SSS e podologo con diploma federale: detartrasi, sbiancamento, trattamento parodontale, cura podologica, ortonixia e ortesi.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/immagini_nuovo_sito/logo_final.png`,
  image: [`${SITE_URL}${OG_IMAGE}`, `${SITE_URL}/images/immagini_nuovo_sito/foto_insieme_nuova.JPG`],
  telephone: PHONE,
  email: EMAIL,
  address,
  geo: { '@type': 'GeoCoordinates', latitude: 46.0037, longitude: 8.9511 },
  hasMap: GOOGLE_MAPS_URL,
  areaServed: [
    { '@type': 'City', name: 'Lugano' },
    { '@type': 'AdministrativeArea', name: 'Ticino' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  priceRange: 'CHF 20 - CHF 900',
  currenciesAccepted: 'CHF',
  paymentAccepted: 'Cash, Credit Card, Debit Card, TWINT',
  availableLanguage: ['Italian', 'German', 'French', 'English'],
  medicalSpecialty: ['Dentistry', 'Podiatric'],
  employee: [martina, paolo],
  founder: [martina, paolo],
  sameAs: [
    INSTAGRAM_URL,
    GOOGLE_PROFILE_URL,
    'https://www.local.ch/it/d/lugano/6900/igiene-dentale/centro-igea-sagl-t7YTIXgfdJCDgTrksAMGBQ',
    'https://search.ch/tel/lugano/via-nassa-54/centro-igea-sagl-2',
  ],
  legalName: 'Centro Igea Sagl',
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', urlTemplate: BOOKING_URL, actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'] },
    result: { '@type': 'Reservation', name: 'Appuntamento presso Studio Rusconi' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi',
    itemListElement: [
      { '@type': 'Offer', url: `${SITE_URL}/igiene-dentale`, itemOffered: { '@type': 'Service', name: 'Igiene dentale professionale (detartrasi)' } },
      { '@type': 'Offer', url: `${SITE_URL}/igiene-dentale`, itemOffered: { '@type': 'Service', name: 'Sbiancamento dentale' } },
      { '@type': 'Offer', url: `${SITE_URL}/igiene-dentale`, itemOffered: { '@type': 'Service', name: 'Trattamento parodontale non chirurgico' } },
      { '@type': 'Offer', url: `${SITE_URL}/podologia`, itemOffered: { '@type': 'Service', name: 'Cura podologica' } },
      { '@type': 'Offer', url: `${SITE_URL}/podologia`, itemOffered: { '@type': 'Service', name: 'Ortonixia e ortesi siliconiche' } },
    ],
  },
}

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'it-CH',
  publisher: { '@id': BUSINESS_ID },
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path || '/'}`,
    })),
  }
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function service(input: {
  path: string
  name: string
  description: string
  serviceType: string
  provider: typeof martina | typeof paolo
  offers: string[]
}) {
  return {
    '@type': 'MedicalProcedure',
    '@id': `${SITE_URL}${input.path}#service`,
    name: input.name,
    description: input.description,
    procedureType: input.serviceType,
    url: `${SITE_URL}${input.path}`,
    inLanguage: 'it-CH',
    provider: { '@id': BUSINESS_ID },
    performer: { '@id': input.provider['@id'] },
    availableService: input.offers.map((name) => ({ '@type': 'MedicalTherapy', name })),
  }
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
