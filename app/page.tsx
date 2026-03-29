import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DisciplineSelector } from "@/components/discipline-selector"
import { IgieneDentale } from "@/components/igiene-dentale"
import { Podologia } from "@/components/podologia"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DisciplineSelector />
        <IgieneDentale />
        <Podologia />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
