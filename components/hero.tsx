import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin, Clock, Globe, Calendar } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Mobile: Team photo first */}
      <div className="relative mx-auto w-full md:hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/immagini_nuovo_sito/1.Home1 Marti&Polo.JPG"
            alt="Martina e Paolo Rusconi, Studio Rusconi"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 md:gap-12 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left content */}
        <div className="flex flex-col gap-5 text-center md:gap-6 md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-lavender md:text-base">
              Dedizione, Integrità, Innovazione
            </p>
            <h1 className="text-balance font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Studio specialistico in igiene dentale e podologia nel cuore di Lugano.
            </h1>
          </div>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
            Esperienza federale, approccio umano: l&apos;eccellenza in podologia e igiene dentale. Il benessere che parte dall&apos;ascolto.
          </p>

          {/* CTA row */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:items-start">
            <a href="https://book.agenda.ch/services?companyId=17111" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full gap-2 bg-lavender text-lavender-foreground hover:bg-lavender/90 sm:w-auto">
                <Calendar className="h-4 w-4" />
                Prenota igiene dentale
              </Button>
            </a>
            <div className="flex w-full gap-3 sm:w-auto">
              <a href="tel:+41912251240">
                <Button variant="outline" size="lg" className="flex-1 gap-2 sm:flex-initial">
                  <Phone className="h-4 w-4" />
                  <span className="sm:inline">Chiama</span>
                </Button>
              </a>
              <a href="https://wa.me/41765591870" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="flex-1 gap-2 border-[oklch(0.55_0.15_145)] text-[oklch(0.45_0.12_145)] hover:bg-[oklch(0.95_0.03_145)] sm:flex-initial">
                  <MessageCircle className="h-4 w-4" />
                  <span className="sm:inline">WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 md:justify-start md:gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Nassa+54,+6900+Lugano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs font-medium transition-colors hover:bg-muted md:px-3 md:py-1.5">
                <MapPin className="h-3 w-3" />
                Via Nassa 54, Lugano
              </Badge>
            </a>
            <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs font-medium md:px-3 md:py-1.5">
              <Clock className="h-3 w-3" />
              Su appuntamento
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs font-medium md:px-3 md:py-1.5">
              <Globe className="h-3 w-3" />
              Multilingue
            </Badge>
          </div>
        </div>

        {/* Desktop: Team together photo */}
        <div className="hidden items-center justify-center md:flex lg:justify-end">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/images/immagini_nuovo_sito/1.Home1 Marti&Polo.JPG"
              alt="Martina e Paolo Rusconi, Studio Rusconi"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* About text */}
      <div className="mx-auto max-w-7xl px-4 pb-12 md:pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
          <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            Studio Rusconi nasce dall&apos;esperienza di <strong className="text-foreground">Martina Rusconi</strong>, igienista dentale con oltre vent&apos;anni di attività clinica, formativa e di ricerca nelle migliori scuole specializzate svizzere e di suo fratello <strong className="text-foreground">Paolo Rusconi</strong>, podologo federale esperto e formatore. Uniti da valori di dedizione, integrità e innovazione, offrono un approccio sanitario fondato sull&apos;ascolto e sulla personalizzazione delle cure. Lo studio promuove un&apos;etica della qualità, rispettando l&apos;unicità di ogni paziente e collaborando con una rete di professionisti qualificati sul territorio e oltre Gottardo.
          </p>
        </div>
      </div>
    </section>
  )
}
