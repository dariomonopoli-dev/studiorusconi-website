import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CreditCard,
  Globe,
  MessageCircle,
  Calendar,
  Instagram,
} from "lucide-react"

export function Contact() {
  return (
    <section id="contatti" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Informazioni pratiche
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tutto quello che vi serve per raggiungerci e contattarci.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: details */}
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Nassa+54,+6900+Lugano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 transition-colors hover:text-foreground"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Indirizzo
                </p>
                <p className="text-sm text-muted-foreground">
                  Via Nassa 54, 6900 Lugano, Svizzera
                </p>
              </div>
            </a>
            <a href="tel:+41912251240" className="flex items-start gap-4 transition-colors hover:text-foreground">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Telefono
                </p>
                <p className="text-sm text-muted-foreground">
                  +41 91 225 12 40
                </p>
              </div>
            </a>
            <a href="https://wa.me/41765591870" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 transition-colors hover:text-foreground">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.45_0.12_145)]" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  WhatsApp
                </p>
                <p className="text-sm text-muted-foreground">
                  +41 76 559 18 70
                </p>
              </div>
            </a>
            <a href="mailto:info@studiorusconi.ch" className="flex items-start gap-4 transition-colors hover:text-foreground">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">
                  info@studiorusconi.ch
                </p>
              </div>
            </a>
            <a href="https://www.instagram.com/centro_igea_lugano" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 transition-colors hover:text-foreground">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-[#E4405F]" />
              <div>
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="text-sm text-muted-foreground">
                  @centro_igea_lugano
                </p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Orario</p>
                <p className="text-sm text-muted-foreground">
                  Su appuntamento, da lunedì a venerdì
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Metodi di pagamento
                </p>
                <p className="text-sm text-muted-foreground">
                  Contanti, Carta di credito / debito, TWINT, Fattura
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Lingue</p>
                <p className="text-sm text-muted-foreground">
                  Italiano, Tedesco, Francese, Inglese
                </p>
              </div>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border lg:aspect-auto lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.8!2d8.9465!3d46.0037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Nassa+54%2C+6900+Lugano!5e0!3m2!1sit!2sch!4v1"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Rusconi - Via Nassa 54, Lugano"
              />
            </div>
          </div>
        </div>

        {/* Final CTA banner */}
        <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-primary px-8 py-12 text-center">
          <h3 className="text-balance font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            Pronti a prendervi cura di voi?
          </h3>
          <p className="max-w-md text-sm text-primary-foreground/80">
            Prenotate oggi il vostro appuntamento e scoprite un approccio alla
            cura fatto di competenza, delicatezza e attenzione.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-foreground"
              asChild
            >
              <a href="https://book.agenda.ch/services?companyId=17111" target="_blank" rel="noopener noreferrer">
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
    </section>
  )
}
