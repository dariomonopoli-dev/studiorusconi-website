import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Podologia } from "@/components/podologia"

export const metadata: Metadata = {
  title: "Podologia | Studio Rusconi",
  description:
    "Trattamenti di podologia a Lugano: cura podologica strumentale, ortonixia, ortesi siliconiche e trattamenti mirati.",
}

export default function PodologiaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Podologia />
      </main>
      <Footer />
    </div>
  )
}
