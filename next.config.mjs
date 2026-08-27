/** @type {import('next').NextConfig} */

const googleAdsDomains = [
  'https://www.google.com',
  'https://www.google.ch',
  'https://www.google.it',
  'https://www.google.de',
  'https://www.google.fr',
  'https://www.google.at',
].join(' ')

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  // 'unsafe-inline' is required by Next's inline hydration payload; a nonce would
  // force every page through middleware and lose static prerendering.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://maps.googleapis.com https://maps.gstatic.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net ${googleAdsDomains}`,
  'frame-src https://www.google.com https://www.googletagmanager.com https://*.doubleclick.net',
  `connect-src 'self' https://maps.googleapis.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.doubleclick.net https://va.vercel-scripts.com ${googleAdsDomains}`,
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return ['centroigea.ch', 'www.centroigea.ch', 'studiorusconi.ch'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://www.studiorusconi.ch/:path*',
      permanent: true,
    }))
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/studio-rusconi.vcf',
        headers: [
          { key: 'Content-Type', value: 'text/vcard; charset=utf-8' },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="studio-rusconi.vcf"',
          },
        ],
      },
    ]
  },
}

export default nextConfig
