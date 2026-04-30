import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LightboxGallery } from "@/components/lightbox-gallery"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Galleria | Studio Rusconi",
  description:
    "Galleria fotografica dello Studio Rusconi a Lugano: ambienti, team al lavoro e i nostri trattamenti di igiene dentale e podologia.",
}

const photos = [
  { src: "/images/foto Dario/5.jpg", alt: "Ingresso dello Studio Rusconi a Lugano" },
  { src: "/images/foto Dario/4.jpg", alt: "Sala d'attesa dello studio" },
  { src: "/images/foto Dario/2.JPG", alt: "Reception dello studio" },
  { src: "/images/foto Dario/igenista.jpg", alt: "Studio di igiene dentale" },
  { src: "/images/foto Dario/IMG-7492.jpg", alt: "Studio dentistico con vista" },
  { src: "/images/foto Dario/1.jpg", alt: "Igienista dentale dello Studio Rusconi" },
  { src: "/images/foto Dario/10badd4a-364f-4b51-ab31-db2383612bc6.JPG", alt: "Analisi radiografica al computer" },
  { src: "/images/foto Dario/abefcfe6-dd6e-4150-a991-fcd80a2ecb82.JPG", alt: "Trattamento di igiene dentale in corso" },
  { src: "/images/foto Dario/1efe1354-7390-45c7-b581-69001091ba3c.JPG", alt: "Trattamento dentale con strumentazione professionale" },
  { src: "/images/foto Dario/3.JPG", alt: "Dario al lavoro durante un trattamento" },
  { src: "/images/foto Dario/IMG_0760.jpg", alt: "Trattamento podologico con strumentazione" },
  { src: "/images/foto Dario/ec9f8d2a-85f3-4ad4-82e8-927ab2c3f1a7.JPG", alt: "Prodotti per la cura del piede" },
  { src: "/images/foto Dario/64c1592e-067e-49e5-8e6d-ee07e73a5272.JPG", alt: "Strumentazione sterile per trattamenti" },
  { src: "/images/foto Dario/c74f30a2-237e-496c-b1a9-69fb4285570f.JPG", alt: "Sterilizzazione degli strumenti in autoclave" },
]

export default function GalleriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-lavender" />
              <Badge className="gap-1.5 bg-lavender/20 text-foreground hover:bg-lavender/20">
                <span className="text-lg">📸</span>
                Galleria
              </Badge>
              <span className="h-1 w-8 rounded-full bg-lavender" />
            </div>
            <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Uno sguardo nel nostro studio
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              Ambienti, team al lavoro e momenti dei nostri trattamenti di igiene
              dentale e podologia.
            </p>
          </div>

          <LightboxGallery
            photos={photos}
            gridClassName="grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
