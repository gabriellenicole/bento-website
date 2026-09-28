// Vercel serverless function: GET /api/top-tracks
// Returns gaby's current top 5 tracks from Spotify.
//
// Needs three env vars on Vercel (see README → "spotify setup"):
//   SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN

type SpotifyTrack = {
  id: string
  name: string
  artists: { name: string }[]
  album: { images: { url: string; width: number }[] }
}

const json = (body: unknown, status = 200, cache = true) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json',
      // cache at the edge for an hour so we barely touch spotify
      'cache-control': cache ? 's-maxage=3600, stale-while-revalidate=86400' : 'no-store',
    },
  })

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) return null

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })
  if (!res.ok) throw new Error(`token refresh failed: ${res.status}`)
  const data = (await res.json()) as { access_token: string }
  return data.access_token
}

export async function GET() {
  try {
    const token = await getAccessToken()
    if (!token) return json({ error: 'spotify not configured' }, 503, false)

    const res = await fetch(
      'https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term',
      { headers: { Authorization: `Bearer ${token}` } },
    )
    if (!res.ok) return json({ error: `spotify error ${res.status}` }, 502, false)

    const { items } = (await res.json()) as { items: SpotifyTrack[] }
    const tracks = items.map((t) => ({
      id: t.id,
      name: t.name,
      artists: t.artists.map((a) => a.name).join(', '),
      // smallest image that's still >= 300px, for the record label
      image:
        [...t.album.images].sort((a, b) => a.width - b.width).find((i) => i.width >= 300)?.url ??
        t.album.images[0]?.url,
    }))

    return json({ tracks })
  } catch (err) {
    console.error(err)
    return json({ error: 'failed to load top tracks' }, 500, false)
  }
}
