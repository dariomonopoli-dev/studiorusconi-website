"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
          {/* Close button */}
          <button
            onClick={decline}
            className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="h-6 w-6 text-primary" />
          </div>

          {/* Content */}
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Utilizziamo i cookie
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Questo sito utilizza cookie tecnici e, previo tuo consenso, cookie di profilazione per migliorare
            l&apos;esperienza di navigazione e analizzare il traffico del sito.
            Puoi accettare tutti i cookie o rifiutare quelli non essenziali.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={decline} className="sm:order-1">
              Solo necessari
            </Button>
            <Button
              onClick={accept}
              className="bg-primary text-primary-foreground hover:bg-primary/90 sm:order-2"
            >
              Accetta tutti
            </Button>
          </div>

          {/* Policy link */}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Maggiori informazioni nella nostra{" "}
            <a href="#" className="underline hover:text-foreground">Cookie Policy</a>
            {" "}e{" "}
            <a href="#" className="underline hover:text-foreground">Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  )
}
