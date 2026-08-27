import { Star, ExternalLink, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { fetchGoogleReviews } from "@/lib/google-reviews"
import { GOOGLE_PROFILE_URL, GOOGLE_REVIEW_URL } from "@/lib/seo"

export async function Testimonials() {
  const google = await fetchGoogleReviews()
  if (!google || google.reviews.length === 0) return null

  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Cosa dicono i nostri pazienti
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            La fiducia dei nostri pazienti è il nostro più grande riconoscimento.
          </p>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-amber-300"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(google.rating) ? "fill-amber-400 text-amber-400" : "text-border"}`}
                />
              ))}
            </span>
            <span className="font-semibold">{google.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">su Google · {google.total} recensioni</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        </div>
      </div>

      <TestimonialsCarousel testimonials={google.reviews} />

      <div className="mx-auto mt-10 flex justify-center px-4">
        <Button variant="outline" size="lg" className="gap-2" asChild>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <PenLine className="h-4 w-4" />
            Lascia una recensione su Google
          </a>
        </Button>
      </div>
    </section>
  )
}
