import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DisciplineSelector } from "@/components/discipline-selector"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { faqs } from "@/components/faq"
import { faqPage, graph } from "@/lib/seo"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={graph(faqPage(faqs))} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <DisciplineSelector />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
