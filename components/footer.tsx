import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Igiene dentale", href: "#igiene-dentale" },
  { label: "Podologia", href: "#podologia" },
  { label: "Team", href: "#team" },
  { label: "Contatti", href: "#contatti" },
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
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">SR</span>
              </span>
              <span className="text-base font-semibold text-foreground">
                Studio Rusconi
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Igiene dentale e podologia nel cuore di Lugano. Professionalità,
              cura e attenzione per ogni paziente.
            </p>
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
