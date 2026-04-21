import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Tariffe | Studio Rusconi",
  description:
    "Tariffe dei servizi di igiene dentale e podologia dello Studio Rusconi a Lugano.",
}

const igieneDentale = [
  { prestazione: "Trattamento igienista dentale - cura semplice (45 min)", prezzo: "150" },
  { prestazione: "Trattamento igienista dentale - cura media (50 min)", prezzo: "165" },
  { prestazione: "Trattamento igienista dentale - cura intensiva (60 min)", prezzo: "180" },
  { prestazione: "Bambini fino ai 10 anni (30 min)", prezzo: "90" },
  { prestazione: "Ragazzi e studenti", prezzo: "130" },
  { prestazione: "Trattamento parodontale non chirurgico", prezzo: "250" },
  { prestazione: "Misura delle tasche", prezzo: "100" },
  { prestazione: "Radiografia (cadauna)", prezzo: "20" },
  { prestazione: "Applicazione prodotto specifico curativo", prezzo: "20" },
  { prestazione: "Applicazione prodotto specifico preventivo", prezzo: "20" },
  { prestazione: "Sigillature preventive (per dente)", prezzo: "30" },
  { prestazione: "Pulizia apparecchi amovibili", prezzo: "30" },
  { prestazione: "Brillantino", prezzo: "60" },
]

const sbiancamento = [
  { prestazione: "Sbiancamento domiciliare", prezzo: "550" },
  { prestazione: "Sbiancamento ambulatoriale: Click", prezzo: "90" },
  { prestazione: "Sbiancamento ambulatoriale: Intense power", prezzo: "450" },
  { prestazione: "Pacchetto combinato (domicilio + studio)", prezzo: "900" },
]

const podologia = [
  { prestazione: "Cura podologica 30 min", prezzo: "65" },
  { prestazione: "Cura podologica 45 min", prezzo: "78" },
  { prestazione: "Cura podologica 60 min", prezzo: "90" },
  { prestazione: "Cura podologica 60+ min", prezzo: "110" },
  { prestazione: "Ricostruzione ungueali mini", prezzo: "20" },
  { prestazione: "Ricostruzione ungueali medi", prezzo: "40" },
  { prestazione: "Ricostruzione ungueali maxi", prezzo: "60" },
  { prestazione: "Ortonixia titanio", prezzo: "80" },
  { prestazione: "Ortonixia BS spanghe", prezzo: "50" },
  { prestazione: "Ortonixia 3TO", prezzo: "80" },
  { prestazione: "Ortesi silicone mini", prezzo: "40" },
  { prestazione: "Ortesi silicone maxi", prezzo: "60" },
  { prestazione: "Ortosock", prezzo: "40" },
  { prestazione: "Trattamento mirato", prezzo: "da 35 a 75" },
  { prestazione: "Consulenza semplice", prezzo: "20" },
  { prestazione: "Consulenza con ausilio di materiali", prezzo: "40" },
]

function TariffeTable({
  data,
}: {
  data: { prestazione: string; prezzo: string }[]
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
              Prestazione
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
              Prezzo in CHF
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.prestazione}
              className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
            >
              <td className="px-4 py-3 text-sm text-muted-foreground">
                {row.prestazione}
              </td>
              <td className="px-4 py-3 text-right text-sm font-medium text-foreground">
                {row.prezzo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TariffePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Prestazioni e tariffe
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              Tariffario allineato alle raccomandazioni della nostra associazione
              professionale.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Igiene Dentale */}
            <div>
              <h2 className="mb-4 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                <span className="text-xl">🦷</span> Igienista Dentale
              </h2>
              <TariffeTable data={igieneDentale} />
            </div>

            {/* Sbiancamento */}
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                Sbiancamento dei denti
              </h3>
              <TariffeTable data={sbiancamento} />
            </div>

            {/* Podologia */}
            <div>
              <h2 className="mb-4 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                <span className="text-xl">🦶🏻</span> Podologo
              </h2>
              <TariffeTable data={podologia} />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-primary px-8 py-12 text-center">
            <h3 className="text-balance font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
              Pronti a prenotare?
            </h3>
            <p className="max-w-md text-sm text-primary-foreground/80">
              Contattateci per fissare un appuntamento o per ulteriori
              informazioni sui nostri servizi.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-foreground"
                asChild
              >
                <a
                  href="https://book.agenda.ch/services?companyId=17111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4" />
                  Prenota igiene dentale
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-foreground"
                asChild
              >
                <a href="tel:+41912251240">
                  <Phone className="h-4 w-4" />
                  Chiama
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
