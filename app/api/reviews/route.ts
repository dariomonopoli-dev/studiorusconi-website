import { NextResponse } from 'next/server'

export async function GET() {
  const PLACE_ID = 'ChIJv-PApH4thEcROKOdHpeg3pA'
  const API_KEY = process.env.GOOGLE_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating&key=${API_KEY}&language=it`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return NextResponse.json(data.result.reviews || [])
  } catch (error) {
    return NextResponse.json({ error: 'Errore nel caricamento' }, { status: 500 })
  }
}