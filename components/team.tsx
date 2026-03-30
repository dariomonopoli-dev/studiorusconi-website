import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink, Download } from "lucide-react"

const team = [
  {
    name: "Martina Rusconi",
    role: "Igienista dentale SSS",
    image: "/images/immagini_nuovo_sito/Martina_nuova.jpeg",
    bio: "Sono una professionista d'esperienza capace di coniugare l'aspetto tecnico e scientifico relativo alla medicina dentaria con la dimensione prettamente umana propria alle professioni medicali. Oltre ad avere delle conoscenze solide, delle abilità manuali d'eccellenza, riesco ad instaurare un clima di fiducia con i miei pazienti in modo da rispondere al meglio ai bisogni della persona.",
    experience: "Ho sviluppato un bagaglio di competenze molto variato grazie alle esperienze lavorative d'eccezione nel campo dell'insegnamento, della medicina umana, umanitaria e dentaria.",
    credentials: [
      "2006 – Master of Science in Pedagogia e Psicologia, Università di Ginevra",
      "1999 – Diploma di Igienista Dentale, Scuola specializzata di Ginevra",
      "2000-2010 – Docente alla formazione professionale delle Igieniste dentali, Università di Ginevra",
      "2001-2007 – Collaborante nel progetto GESNOMA, HUG Ginevra",
      "2000-2010 – Igienista dentale presso Dottor Virgillito, Ginevra",
      "2010-2021 – Igienista dentale presso i Dottori Moor, Lugano",
    ],
    languages: ["Italiano", "Tedesco", "Inglese"],
    accent: "teal" as const,
  },
  {
    name: "Paolo Rusconi",
    role: "Podologo dipl. federale",
    image: "/images/immagini_nuovo_sito/Paolo_nuova.jpeg",
    bio: "Sono un professionista meticoloso e preciso nelle cure della persona. Mi applico affinché si trovi la migliore soluzione per alleviare le pene dei miei pazienti. La prevenzione è un pilastro fondamentale per la salute generale soprattutto dei pazienti che soffrono di malattie croniche. Per questa ragione ritengo importante una presa a carico accurata e tempestiva.",
    experience: "",
    credentials: [
      "2009 – Diploma federale podologia, Ginevra",
      "2010-2020 – Podologo indipendente",
      "2014-2021 – Docente di podologia presso il CPS Lugano",
    ],
    languages: ["Italiano", "Francese", "Inglese"],
    accent: "lavender" as const,
  },
]

export function Team() {
  return (
    <section id="team" className="bg-muted/50 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-balance font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Il nostro team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Siamo dei professionisti della salute formati nelle migliori scuole specializzate svizzere e con un vasto bagaglio di esperienze professionali. Condividiamo la passione per il lavoro ben fatto e l&apos;ascolto dei nostri pazienti.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              {/* Photo */}
              <div className="relative h-96 w-full shrink-0 sm:h-[28rem]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                  quality={100}
                  unoptimized
                  priority
                />
              </div>

              {/* Bio content */}
              <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      member.accent === "teal"
                        ? "text-teal"
                        : "text-lavender"
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                {member.experience && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.experience}
                  </p>
                )}

                {/* Credentials */}
                <details className="group">
                  <summary className={`cursor-pointer text-sm font-medium ${
                    member.accent === "teal" ? "text-teal" : "text-lavender"
                  }`}>
                    Formazione e percorso professionale
                  </summary>
                  <ul className="mt-2 flex flex-col gap-1.5 pl-1">
                    {member.credentials.map((cred) => (
                      <li key={cred} className="text-xs leading-relaxed text-muted-foreground">
                        {cred}
                      </li>
                    ))}
                  </ul>
                </details>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {member.languages.map((lang) => (
                    <Badge
                      key={lang}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-2 sm:flex-row">
                  <Button
                    variant="outline"
                    className={`w-full sm:w-fit ${
                      member.accent === "teal"
                        ? "border-teal/40 hover:bg-teal/10"
                        : "border-lavender/40 hover:bg-lavender/10"
                    }`}
                    asChild
                  >
                    {member.accent === "teal" ? (
                      <a href="https://book.agenda.ch/services?companyId=17111" target="_blank" rel="noopener noreferrer">
                        {"Prenota con " + member.name.split(" ")[0]}
                      </a>
                    ) : (
                      <a href="tel:+41912251240">
                        {"Prenota con " + member.name.split(" ")[0]}
                      </a>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2 sm:w-fit"
                    asChild
                  >
                    <a href="/biglietto-da-visita.pdf" download>
                      <Download className="h-4 w-4" />
                      Biglietto da visita e tariffe
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nareg verification */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-center md:mt-12">
          <p className="text-sm text-muted-foreground">
            Verificate i diplomi dei vostri operatori nel registro nazionale delle professioni della salute: saprete esattamente che titolo di studio hanno conseguito e la validità sul territorio svizzero.
          </p>
          <a
            href="http://www.nareg.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-lavender transition-colors hover:text-lavender-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Registro nazionale delle professioni sanitarie (nareg.ch)
          </a>
        </div>
      </div>
    </section>
  )
}
