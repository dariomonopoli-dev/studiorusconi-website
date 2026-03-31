"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Igiene dentale", href: "#igiene-dentale" },
  { label: "Podologia", href: "#podologia" },
  { label: "Team", href: "#team" },
  { label: "Contatti", href: "#contatti" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/immagini_nuovo_sito/logo_final.png"
            alt="Studio Rusconi"
            width={160}
            height={64}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+41912251240" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <Phone className="mr-1 inline-block h-4 w-4" />
            +41 91 225 12 40
          </a>
          <Button size="default" className="bg-lavender text-lavender-foreground hover:bg-lavender/90" asChild>
            <a href="https://book.agenda.ch/services?companyId=17111" target="_blank" rel="noopener noreferrer">
              Prenota
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Navigazione mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button className="w-full bg-lavender text-lavender-foreground hover:bg-lavender/90" asChild>
              <a href="https://book.agenda.ch/services?companyId=17111" target="_blank" rel="noopener noreferrer">
                Prenota
              </a>
            </Button>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="tel:+41912251240">
                <Phone className="h-4 w-4" />
                +41 91 225 12 40
              </a>
            </Button>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="https://wa.me/41765591870" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                +41 76 559 18 70
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
