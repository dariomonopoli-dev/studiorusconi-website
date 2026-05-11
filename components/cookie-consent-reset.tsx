"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsentReset() {
  const [status, setStatus] = useState<"idle" | "done">("idle")

  function reset() {
    localStorage.removeItem("cookie-consent")
    window.dispatchEvent(new Event("cookie-consent-change"))
    setStatus("done")
    setTimeout(() => window.location.reload(), 800)
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <Button onClick={reset} variant="outline">
        Rigestisci le preferenze cookie
      </Button>
      {status === "done" && (
        <p className="text-xs text-muted-foreground">
          Preferenze resettate. Aggiornamento della pagina in corso…
        </p>
      )}
    </div>
  )
}
