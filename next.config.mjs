/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/studio-rusconi.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="studio-rusconi.vcf"',
          },
        ],
      },
    ]
  },
}

export default nextConfig
