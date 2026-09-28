# gaby's corner of the internet

my personal site. blue stripes, homemade coffee, LANY on repeat.

built with vite + react + tailwind + framer-motion, deployed on vercel.

```bash
pnpm install
pnpm dev
```

## where to edit things

almost everything personal lives in `src/data/me.ts`: songs, romcoms, spanish phrases,
milk options, the friend quiz, conversation questions, socials, and gallery photos.

the homepage sections live in `src/components/gaby/`.

## changing photos

**hero polaroids** → `heroPhotos` in `src/data/me.ts`

1. put the photo in `src/assets/` (e.g. `src/assets/me-coffee.jpg`)
2. import it at the top of `me.ts`: `import meCoffee from '@/assets/me-coffee.jpg'`
3. add `{ src: meCoffee, caption: 'a short caption' }` to `heroPhotos`

keep captions short (~25 characters) so they fit on one line. portrait photos look best.

**gallery** → the `imagekit` list in `src/data/me.ts`

upload to imagekit.io and paste the part of the url after `/gabriellenicole/`,
or import a local file like above and add it to `galleryPhotos`.

## spotify setup (live top 5)

the music player calls `/api/top-tracks` (`api/top-tracks.ts`, a vercel function) for my
real top 5 from the last ~4 weeks. until it's set up (and in `pnpm dev`) it falls back to
the hand-picked list in `src/data/me.ts`.

1. create an app at https://developer.spotify.com/dashboard and add the redirect uri
   `http://127.0.0.1:8888/callback`
2. get a refresh token (one time):
   ```bash
   SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/spotify-refresh-token.mjs
   ```
   open the url it prints, log in, and copy the `SPOTIFY_REFRESH_TOKEN` from the terminal.
3. in vercel → project → settings → environment variables, add
   `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`, then redeploy.

to test the function locally, use `vercel dev` instead of `pnpm dev`.
