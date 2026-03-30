import { Card, CardContent } from "@/components/ui/card"
import {
  Sparkles,
  ShieldCheck,
  Sun,
  HeartPulse,
  Footprints,
  Scissors,
  Activity,
  ClipboardCheck,
} from "lucide-react"

const igieneDentaleServices = [
  {
    icon: Sparkles,
    title: "Detartrasi professionale",
    description:
      "Rimozione completa di tartaro e placca con strumenti di ultima generazione per una pulizia profonda e confortevole.",
  },
  {
    icon: ShieldCheck,
    title: "Parodontologia di supporto",
    description:
      "Monitoraggio e trattamento delle gengive per prevenire e gestire la malattia parodontale nel tempo.",
  },
  {
    icon: Sun,
    title: "Sbiancamento dentale",
    description:
      "Trattamenti sicuri e personalizzati per restituire luminosità e candore al vostro sorriso.",
  },
  {
    icon: HeartPulse,
    title: "Prevenzione e educazione",
    description:
      "Consigli personalizzati per una corretta igiene domiciliare e visite di controllo regolari.",
  },
]

const podologiaServices = [
  {
    icon: Footprints,
    title: "Trattamento calli e duroni",
    description:
      "Rimozione professionale di ipercheratosi con tecniche indolori e risultati immediati.",
  },
  {
    icon: Scissors,
    title: "Unghia incarnita",
    description:
      "Trattamento conservativo o correttivo dell'onicocriptosi, con approccio delicato e risolutivo.",
  },
  {
    icon: Activity,
    title: "Cura del piede diabetico",
    description:
      "Controlli periodici e trattamenti specifici per la prevenzione delle complicanze nei pazienti diabetici.",
  },
  {
    icon: ClipboardCheck,
    title: "Ortesi e plantari su misura",
    description:
      "Realizzazione di ortesi digitali e plantari personalizzati per correggere le disfunzioni del piede.",
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
  accentColor,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  accentColor: "teal" | "lavender"
}) {
  return (
    <Card className="gap-0 border-border bg-card transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col gap-3 p-6">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            accentColor === "teal" ? "bg-teal/10" : "bg-lavender/10"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${
              accentColor === "teal" ? "text-teal" : "text-lavender"
            }`}
          />
        </div>
        <h4 className="text-base font-semibold text-foreground">{title}</h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export function Services() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            I nostri servizi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Trattamenti specialistici eseguiti con cura, precisione e le
            tecnologie più avanzate.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Igiene dentale column */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-teal" />
              <h3 className="text-lg font-semibold text-foreground">
                Igiene Dentale
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {igieneDentaleServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  accentColor="teal"
                />
              ))}
            </div>
          </div>

          {/* Podologia column */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-lavender" />
              <h3 className="text-lg font-semibold text-foreground">
                Podologia
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {podologiaServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  accentColor="lavender"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
