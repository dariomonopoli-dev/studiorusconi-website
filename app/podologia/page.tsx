import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Podologia, podologiaFaqs } from "@/components/podologia"
import { JsonLd } from "@/components/json-ld"
import { OG_IMAGE, breadcrumbs, faqPage, graph, paolo, service } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Podologo a Lugano: cura podologica, unghia incarnita, ortonixia",
  description:
    "Podologia a Lugano con Paolo Rusconi, podologo dipl. federale: cura podologica strumentale, unghie incarnite, calli e duroni, ortonixia, ortesi siliconiche, piede diabetico. Via Nassa 54, prenota online.",
  alternates: { canonical: "/podologia" },
  openGraph: {
    title: "Podologo a Lugano | Studio Rusconi",
    description: "Cura podologica, ortonixia e ortesi su misura in Via Nassa a Lugano.",
    url: "/podologia",
    images: [OG_IMAGE],
  },
}

const jsonLd = graph(
  breadcrumbs([{ name: "Podologia", path: "/podologia" }]),
  service({
    path: "/podologia",
    name: "Podologia a Lugano",
    description:
      "Cura podologica strumentale, trattamento di unghie incarnite, ispessite e onicomicosi, rimozione di calli e duroni, ortonixia, ortesi siliconiche su misura e ricostruzione ungueale.",
    serviceType: "Podologia",
    provider: paolo,
    offers: [
      "Cura podologica strumentale",
      "Trattamento unghia incarnita (onicocriptosi)",
      "Rimozione calli e duroni",
      "Ortonixia (rieducazione ungueale)",
      "Ortesi siliconiche su misura",
      "Ricostruzione ungueale",
      "Cura del piede diabetico",
    ],
  }),
  faqPage(podologiaFaqs),
)

export default function PodologiaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <Podologia />
      </main>
      <Footer />
    </div>
  )
}
