// One-time helper to get a Spotify refresh token for /api/top-tracks.
//
// 1. Create an app at https://developer.spotify.com/dashboard
//    and add this redirect URI: http://127.0.0.1:8888/callback
// 2. Run:
//    SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/spotify-refresh-token.mjs
// 3. Open the printed URL, log in, and copy the refresh token it prints.
import http from 'node:http'

const { SPOTIFY_CLIENT_ID: id, SPOTIFY_CLIENT_SECRET: secret } = process.env
if (!id || !secret) {
  console.error('set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET first')
  process.exit(1)
}

const redirectUri = 'http://127.0.0.1:8888/callback'
const authUrl =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    client_id: id,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: 'user-top-read',
  })

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', redirectUri)
  if (url.pathname !== '/callback') return res.end()

  const code = url.searchParams.get('code')
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  })
  const data = await tokenRes.json()

  if (data.refresh_token) {
    console.log('\nSPOTIFY_REFRESH_TOKEN=' + data.refresh_token + '\n')
    res.end('got it! check your terminal. you can close this tab.')
  } else {
    console.error(data)
    res.end('something went wrong, check your terminal.')
  }
  server.close()
})

server.listen(8888, '127.0.0.1', () => {
  console.log('open this in your browser:\n\n' + authUrl + '\n')
})
