import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const igieneDentaleChips = [
  "Detartrasi",
  "Parodontologia",
  "Sbiancamento",
  "Brillantino dentale",
]

const podologiaChips = [
  "Cura podologica",
  "Ortonixia",
  "Ortesi",
  "Trattamenti mirati",
]

export function DisciplineSelector() {
  return (
    <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-balance font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Le nostre discipline
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Due ambiti specialistici, un unico studio. Scegliete la disciplina
            che vi interessa per scoprire tutti i servizi.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {/* Igiene dentale panel */}
          <a
            href="#igiene-dentale"
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-lavender-light transition-shadow hover:shadow-lg sm:gap-5"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/immagini_nuovo_sito/Home-igiene dentale scopri di più.JPG"
                alt="Igiene dentale - scopri di più"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦷</span>
                <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                  Igiene Dentale
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Un sorriso sano parte dalla prevenzione. Trattamenti delicati e
                personalizzati per la salute della vostra bocca.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {igieneDentaleChips.map((chip) => (
                  <Badge
                    key={chip}
                    variant="secondary"
                    className="border-lavender/30 bg-card px-2 py-0.5 text-xs text-foreground sm:px-2.5 sm:py-1"
                  >
                    {chip}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="mt-auto w-full border-lavender/40 text-foreground hover:bg-lavender/10 sm:w-fit" tabIndex={-1}>
                Scopri i servizi
              </Button>
            </div>
          </a>

          {/* Podologia panel */}
          <a
            href="#podologia"
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-teal-light transition-shadow hover:shadow-lg sm:gap-5"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/immagini_nuovo_sito/Home- podologia scopri di piu.JPG"
                alt="Podologia - scopri di più"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦶</span>
                <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                  Podologia
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cura e benessere dei piedi con tecniche moderne. Dalla prevenzione
                alla risoluzione di patologie specifiche.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {podologiaChips.map((chip) => (
                  <Badge
                    key={chip}
                    variant="secondary"
                    className="border-teal/30 bg-card px-2 py-0.5 text-xs text-foreground sm:px-2.5 sm:py-1"
                  >
                    {chip}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="mt-auto w-full border-teal/40 text-foreground hover:bg-teal/10 sm:w-fit" tabIndex={-1}>
                Scopri i servizi
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
