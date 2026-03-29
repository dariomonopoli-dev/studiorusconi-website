"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const SPEED = 0.6 // px per frame

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedReview, setSelectedReview] = useState<any>(null)

  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const loopWidthRef = useRef(0)
  const isHoveredRef = useRef(false)
  const isClickPausedRef = useRef(false)
  const touchRef = useRef({ active: false, lastX: 0 })
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        const data = await response.json()
        setTestimonials(data)
      } catch (error) {
        console.error("Errore fetch:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchReviews()
  }, [])

  // Measure loop width after render
  useEffect(() => {
    if (testimonials.length === 0) return
    const t = setTimeout(() => {
      if (trackRef.current) {
        loopWidthRef.current = trackRef.current.scrollWidth / 3
      }
    }, 150)
    return () => clearTimeout(t)
  }, [testimonials])

  const wrap = (pos: number) => {
    const w = loopWidthRef.current
    if (w === 0) return pos
    let p = pos % w
    if (p > 0) p -= w
    return p
  }

  const animate = useCallback(() => {
    const track = trackRef.current
    if (track) {
      const scrolling = !isClickPausedRef.current && !isHoveredRef.current && !touchRef.current.active
      if (scrolling) posRef.current -= SPEED
      posRef.current = wrap(posRef.current)
      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`
    }
    rafRef.current = requestAnimationFrame(animate)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [animate])

  // Attach touch listeners as non-passive so we can prevent vertical scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onTouchStart = (e: TouchEvent) => {
      touchRef.current = { active: true, lastX: e.touches[0].clientX }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!touchRef.current.active) return
      const dx = e.touches[0].clientX - touchRef.current.lastX
      touchRef.current.lastX = e.touches[0].clientX
      posRef.current = wrap(posRef.current + dx)
      e.preventDefault()
    }
    const onTouchEnd = () => {
      touchRef.current.active = false
    }

    track.addEventListener('touchstart', onTouchStart, { passive: true })
    track.addEventListener('touchmove', onTouchMove, { passive: false })
    track.addEventListener('touchend', onTouchEnd)
    track.addEventListener('touchcancel', onTouchEnd)
    return () => {
      track.removeEventListener('touchstart', onTouchStart)
      track.removeEventListener('touchmove', onTouchMove)
      track.removeEventListener('touchend', onTouchEnd)
      track.removeEventListener('touchcancel', onTouchEnd)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCardClick = (t: any) => {
    isClickPausedRef.current = true
    setSelectedReview(t)
  }

  const handleDialogClose = () => {
    setSelectedReview(null)
    isClickPausedRef.current = false
  }

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  if (isLoading) return null

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
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex py-4 gap-4 sm:gap-6"
          style={{ width: 'fit-content', willChange: 'transform', backfaceVisibility: 'hidden' }}
          onMouseEnter={() => { isHoveredRef.current = true }}
          onMouseLeave={() => { isHoveredRef.current = false }}
        >
          {duplicatedTestimonials.map((t: any, i: number) => (
            <Card
              key={i}
              onClick={() => handleCardClick(t)}
              className="w-[260px] sm:w-[320px] md:w-[380px] shrink-0 border-border bg-card shadow-sm flex flex-col min-h-[220px] sm:min-h-[300px] cursor-pointer hover:border-amber-200 transition-colors group"
            >
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/20 group-hover:text-amber-400/40 transition-colors" />
                </div>

                <div className="flex-grow">
                  <p className="text-[13px] sm:text-[15px] leading-relaxed text-muted-foreground italic whitespace-normal line-clamp-4 sm:line-clamp-5">
                    {`"${t.text}"`}
                  </p>
                  {t.text.length > 180 && (
                    <span className="text-[11px] sm:text-[12px] text-amber-600 font-medium mt-2 block">Leggi tutto →</span>
                  )}
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/60">
                  <p className="text-[13px] sm:text-sm font-bold text-foreground">
                    {t.author_name}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-muted-foreground mt-0.5">
                    Recensione verificata su Google Maps
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedReview} onOpenChange={(open) => { if (!open) handleDialogClose() }}>
          <DialogContent className="max-w-md sm:max-w-lg rounded-2xl">
            <DialogHeader>
              <DialogTitle className="flex flex-col gap-2">
                <div className="flex gap-0.5">
                  {selectedReview && Array.from({ length: selectedReview.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-serif text-xl">{selectedReview?.author_name}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-muted-foreground leading-relaxed italic text-lg">
                {selectedReview && `"${selectedReview.text}"`}
              </p>
              <div className="mt-6 pt-4 border-t border-border/40">
                <span className="text-[12px] text-muted-foreground">Recensione originale su Google</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  )
}
