import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IgieneDentale } from "@/components/igiene-dentale"

export const metadata: Metadata = {
  title: "Igiene Dentale | Studio Rusconi",
  description:
    "Trattamenti di igiene dentale professionale a Lugano: detartrasi, sbiancamento, trattamento parodontale e brillantino dentale.",
}

export default function IgieneDentalePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <IgieneDentale />
      </main>
      <Footer />
    </div>
  )
}
