import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fallbackTracks, socials, watchlist, type Track } from '@/data/me'
import { cn } from '@/lib/utils'
import { Record } from './doodles'

type TopTracksResponse = { tracks: (Track & { image?: string })[] }

// pulls my real top 5 from /api/top-tracks (a vercel function).
// if that's not set up (or we're in local dev), the hand-picked list is used.
function useTopTracks() {
  const [tracks, setTracks] = useState<(Track & { image?: string })[]>(fallbackTracks)
  const [live, setLive] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('/api/top-tracks')
      .then((r) => (r.ok ? (r.json() as Promise<TopTracksResponse>) : Promise.reject()))
      .then((data) => {
        if (cancelled || !data.tracks?.length) return
        setTracks(data.tracks)
        setLive(true)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return { tracks, live }
}

function Player() {
  const { tracks, live } = useTopTracks()
  const [current, setCurrent] = useState(0)
  const track = tracks[current] ?? tracks[0]

  return (
    <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-paper lg:grid-cols-[1fr_1.1fr]">
      {/* the record */}
      <div className="stripes relative flex items-center justify-center p-10">
        <motion.div
          key={track.id}
          initial={{ rotate: -40, scale: 0.9, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="relative aspect-square w-full max-w-[300px]"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-ink shadow-xl">
            {[88, 76, 64].map((s) => (
              <div
                key={s}
                className="absolute rounded-full border border-paper/10"
                style={{ inset: `${(100 - s) / 2}%` }}
              />
            ))}
            <div className="absolute inset-[32%] overflow-hidden rounded-full bg-cobalt">
              {track.image ? (
                <img src={track.image} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-2 text-center font-hand text-lg leading-none text-paper">
                  {track.artists}
                </div>
              )}
            </div>
            <div className="absolute inset-[48.5%] rounded-full bg-cream" />
          </div>
        </motion.div>
        <span className="absolute left-5 top-5 rounded-full bg-paper px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
          {live ? '● live from my spotify' : 'on repeat lately'}
        </span>
      </div>

      <div className="flex flex-col gap-5 p-6 sm:p-10">
        <ol className="flex flex-col">
          {tracks.map((t, i) => (
            <li key={t.id}>
              <button
                onClick={() => setCurrent(i)}
                className={cn(
                  'flex w-full items-baseline gap-4 border-b border-dashed border-ink/15 py-3 text-left transition-colors',
                  i === current ? 'text-cobalt' : 'hover:text-cobalt',
                )}
              >
                <span className="font-mono text-xs">0{i + 1}</span>
                <span className="flex-1">
                  <span className="font-serif text-2xl">{t.name}</span>
                  <span className="ml-2 text-sm text-ink/60">{t.artists}</span>
                </span>
                {t.note && (
                  <span className="hidden font-hand text-lg text-ink/60 sm:inline">{t.note}</span>
                )}
              </button>
            </li>
          ))}
        </ol>
        <iframe
          key={track.id}
          title={`${track.name} on Spotify`}
          src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
          className="h-[80px] w-full rounded-xl"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <a
          href={socials.spotify}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] uppercase tracking-widest text-ink/60 underline underline-offset-4 hover:text-cobalt"
        >
          follow my spotify →
        </a>
      </div>
    </div>
  )
}

function Watchlist() {
  return (
    <div className="mt-16">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
        <h3 className="font-serif text-4xl">
          good old romcoms <em className="text-cobalt">(and a good mystery)</em>
        </h3>
        <p className="font-hand text-2xl text-cobalt">soft heart, detective brain</p>
      </div>
      <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-3">
        {watchlist.map((m) => {
          const thriller = m.genre === 'thriller'
          return (
            <div
              key={m.title}
              className={cn(
                'relative flex w-60 shrink-0 snap-start flex-col justify-between gap-6 rounded-2xl border-2 border-dashed p-5 transition-transform hover:-rotate-1',
                thriller ? 'border-paper/30 bg-ink text-paper' : 'border-cobalt/50 bg-sky-soft',
              )}
            >
              {/* ticket notches: centered on the card edge, only the inner half shown, with
                  the same dashed border so the dotted line follows the half circle */}
              {(['left', 'right'] as const).map((side) => (
                <span
                  key={side}
                  className={cn(
                    'absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border-2 border-dashed bg-cream bg-clip-padding',
                    side === 'left'
                      ? '-left-[16px] [clip-path:inset(0_0_0_50%)]'
                      : '-right-[16px] [clip-path:inset(0_50%_0_0)]',
                    thriller ? 'border-paper/30' : 'border-cobalt/50',
                  )}
                />
              ))}
              <div
                className={cn(
                  'flex justify-between font-mono text-[10px] uppercase tracking-widest',
                  thriller ? 'text-paper/50' : 'text-ink/50',
                )}
              >
                <span>{thriller ? 'case file' : 'admit one'}</span>
                <span>{m.tag}</span>
              </div>
              <p className="font-serif text-3xl leading-none">{m.title}</p>
              <p
                className={cn(
                  'font-hand text-xl leading-tight',
                  thriller ? 'text-sky-stripe' : 'text-cobalt',
                )}
              >
                {m.line}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Music() {
  return (
    <section id="music" className="w-full scroll-mt-6 px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <Record className="mx-auto h-8 w-8 text-cobalt" />
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
            press play while you scroll
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl">
            i LOVE LANY. <em className="text-cobalt">and oldies.</em>
          </h2>
          <p className="mx-auto max-w-lg text-ink/70">
            my top 5 right now. if you ever want to know how i&apos;m doing, check this list.
          </p>
        </div>
        <Player />
        <Watchlist />
      </div>
    </section>
  )
}
