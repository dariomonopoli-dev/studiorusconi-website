import { Separator } from "@/components/ui/separator"
import { Instagram } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Igiene dentale", href: "/igiene-dentale" },
  { label: "Podologia", href: "/podologia" },
  { label: "Tariffe", href: "/tariffe" },
  { label: "Team", href: "/#team" },
  { label: "Contatti", href: "/#contatti" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Impressum", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center text-center gap-3">
            <Image
              src="/images/immagini_nuovo_sito/logo_final.png"
              alt="Studio Rusconi"
              width={160}
              height={64}
              className="h-10 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Igiene dentale e podologia nel cuore di Lugano. Professionalità,
              cura e attenzione per ogni paziente.
            </p>
            <a
              href="https://www.instagram.com/centro_igea_lugano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-opacity hover:opacity-80"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <Instagram className="h-4 w-4 text-white" />
              </span>
              Seguici
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Link rapidi
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Link rapidi nel footer">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Legale
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Link legali nel footer">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          {"© 2026 Studio Rusconi. Tutti i diritti riservati."}
        </p>
      </div>
    </footer>
  )
}
