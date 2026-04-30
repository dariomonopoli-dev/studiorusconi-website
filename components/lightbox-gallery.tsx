"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type GalleryPhoto = {
  src: string
  alt: string
}

type LightboxGalleryProps = {
  photos: GalleryPhoto[]
  gridClassName?: string
  thumbAspect?: "square" | "portrait" | "landscape"
  sizes?: string
}

const aspectClass: Record<NonNullable<LightboxGalleryProps["thumbAspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[3/2]",
}

export function LightboxGallery({
  photos,
  gridClassName,
  thumbAspect = "square",
  sizes = "(max-width: 768px) 50vw, 25vw",
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const open = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  )
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close, prev, next])

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4",
          gridClassName,
        )}
      >
        {photos.map((photo, idx) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Apri foto: ${photo.alt}`}
            className={cn(
              "group relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              aspectClass[thumbAspect],
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={sizes}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galleria foto"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            aria-label="Chiudi"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Foto precedente"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Foto successiva"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative h-full max-h-[88vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
              priority
            />
          </div>

          {photos.length > 1 && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
              {activeIndex + 1} / {photos.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
