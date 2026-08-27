import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IgieneDentale, igieneFaqs } from "@/components/igiene-dentale"
import { JsonLd } from "@/components/json-ld"
import { OG_IMAGE, breadcrumbs, faqPage, graph, martina, service } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Igienista dentale a Lugano: detartrasi, sbiancamento, parodontite",
  description:
    "Igiene dentale professionale a Lugano con Martina Rusconi, igienista dentale SSS: pulizia denti e detartrasi, sbiancamento, trattamento parodontale non chirurgico, brillantino. Via Nassa 54, prenota online.",
  alternates: { canonical: "/igiene-dentale" },
  openGraph: {
    title: "Igienista dentale a Lugano | Studio Rusconi",
    description: "Detartrasi, sbiancamento e trattamento parodontale in Via Nassa a Lugano.",
    url: "/igiene-dentale",
    images: [OG_IMAGE],
  },
}

const jsonLd = graph(
  breadcrumbs([{ name: "Igiene dentale", path: "/igiene-dentale" }]),
  service({
    path: "/igiene-dentale",
    name: "Igiene dentale professionale a Lugano",
    description:
      "Seduta di igiene dentale professionale: anamnesi, controllo, detartrasi sopra e sotto-gengivale, rimozione macchie, remineralizzazione dello smalto. Sbiancamento e trattamento parodontale non chirurgico.",
    serviceType: "Igiene dentale",
    provider: martina,
    offers: [
      "Detartrasi e pulizia dei denti",
      "Trattamento parodontale non chirurgico",
      "Sbiancamento dentale domiciliare",
      "Sbiancamento dentale in studio",
      "Applicazione brillantino dentale",
      "Sigillature preventive",
    ],
  }),
  faqPage(igieneFaqs),
)

export default function IgieneDentalePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <IgieneDentale />
      </main>
      <Footer />
    </div>
  )
}
