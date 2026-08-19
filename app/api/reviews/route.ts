import { NextResponse } from 'next/server'

const PLACE_ID = 'ChIJv-PApH4thEcROKOdHpeg3pA'
const CACHE_TTL_SECONDS = 21600
const STALE_TTL_SECONDS = 86400

export async function GET() {
  const API_KEY = process.env.GOOGLE_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating&key=${API_KEY}&language=it`

  try {
    const response = await fetch(url, { next: { revalidate: CACHE_TTL_SECONDS } })
    const data = await response.json()

    return NextResponse.json(data.result.reviews || [], {
      headers: {
        'Cache-Control': `public, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}`,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Errore nel caricamento' }, { status: 500 })
  }
}
