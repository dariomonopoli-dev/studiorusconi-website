import { GOOGLE_PLACE_ID } from '@/lib/seo'

const REVALIDATE_SECONDS = 21600

export type GoogleReview = {
  author_name: string
  rating: number
  text: string
  time: number
}

export type GoogleRating = {
  rating: number
  total: number
  reviews: GoogleReview[]
}

export async function fetchGoogleReviews(): Promise<GoogleRating | null> {
  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) return null
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=it`
  try {
    const response = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
    const data = await response.json()
    if (data.status !== 'OK') {
      console.error('Google Places:', data.status, data.error_message)
      return null
    }
    const reviews: GoogleReview[] = (data.result.reviews ?? []).filter((r: GoogleReview) => r.text)
    return { rating: data.result.rating, total: data.result.user_ratings_total, reviews }
  } catch (error) {
    console.error('Google Places:', error)
    return null
  }
}
