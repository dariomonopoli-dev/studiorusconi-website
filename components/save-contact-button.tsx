"use client"

import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

export function SaveContactButton() {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("/studio-rusconi.vcf")
      if (!res.ok) throw new Error("fetch failed")
      const blob = await res.blob()
      const vcardBlob = new Blob([blob], { type: "text/vcard;charset=utf-8" })
      const url = URL.createObjectURL(vcardBlob)
      const a = document.createElement("a")
      a.href = url
      a.download = "studio-rusconi.vcf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch {
      window.location.href = "/studio-rusconi.vcf"
    }
  }

  return (
    <Button asChild size="lg" className="mt-1 gap-2">
      <a href="/studio-rusconi.vcf" download onClick={handleClick}>
        <UserPlus className="h-4 w-4" />
        Salva contatto
      </a>
    </Button>
  )
}
