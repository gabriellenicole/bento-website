import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { milks, socials, spanishPhrases, wardrobe } from '@/data/me'
import { cn } from '@/lib/utils'
import { Film, Mug } from './doodles'

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">{children}</p>
)

function CoffeeLab() {
  const [milkId, setMilkId] = useState<string | null>(null)
  const [froth, setFroth] = useState(0)
  const milk = milks.find((m) => m.id === milkId)

  // hold the button to froth, like the real thing
  const [holding, setHolding] = useState(false)
  useEffect(() => {
    if (!holding) return
    const t = setInterval(() => setFroth((f) => Math.min(100, f + 4)), 60)
    return () => clearInterval(t)
  }, [holding])

  const pickMilk = (id: string) => {
    setMilkId(id)
    setFroth(0)
  }

  const status = !milk
    ? 'step 1: instant coffee’s already in. pick a milk →'
    : froth < 100
      ? 'step 2: hold the frother (it’s the best part)'
      : milk.verdict

  return (
    <div
      id="coffee"
      className="flex scroll-mt-6 flex-col gap-8 rounded-3xl bg-paper p-7 sm:flex-row sm:items-center sm:p-10 lg:col-span-2"
    >
      {/* the mug */}
      <div className="relative mx-auto h-56 w-44 shrink-0">
        <AnimatePresence>
          {froth >= 100 &&
            [0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 0.6, 0], y: -30 }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}
                className="absolute top-0 h-8 w-1 rounded-full bg-ink/20"
                style={{ left: `${40 + i * 18}%` }}
              />
            ))}
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 h-44 w-36 overflow-hidden rounded-b-[36px] rounded-t-md border-[3px] border-ink bg-paper">
          <div className="absolute inset-x-0 bottom-0 flex flex-col-reverse">
            <div className="h-14 bg-[#3B2418]" />
            <motion.div
              animate={{ height: milk ? 52 : 0, backgroundColor: milk?.color ?? '#B98A62' }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              animate={{ height: milk ? (froth / 100) * 34 : 0 }}
              style={{ backgroundColor: milk?.foam }}
              className="rounded-t-xl"
            />
          </div>
          {/* the stripes on my mug, of course */}
          <div className="stripes-diag pointer-events-none absolute inset-x-0 top-3 h-3 opacity-60" />
        </div>
        <div className="absolute bottom-10 left-[8.4rem] h-16 w-10 rounded-r-full border-[3px] border-l-0 border-ink" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <Label>the coffee lab · est. my kitchen</Label>
        <h3 className="font-serif text-4xl leading-tight">
          instant coffee, a milk frother, <em className="text-cobalt">and vibes.</em>
        </h3>
        <p className="text-ink/70">
          i make my coffee at home, every day. when i&apos;m feeling extra, i play around with the
          milk. make one with me:
        </p>
        <div className="flex flex-wrap gap-2">
          {milks.map((m) => (
            <button
              key={m.id}
              onClick={() => pickMilk(m.id)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                milkId === m.id
                  ? 'border-cobalt bg-cobalt text-paper'
                  : 'border-ink/20 hover:border-cobalt hover:bg-sky-soft',
              )}
            >
              {m.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button
            disabled={!milk || froth >= 100}
            onPointerDown={() => setHolding(true)}
            onPointerUp={() => setHolding(false)}
            onPointerLeave={() => setHolding(false)}
            onKeyDown={(e) => e.key === ' ' && setFroth((f) => Math.min(100, f + 20))}
            className="flex select-none items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper disabled:opacity-30"
          >
            <Mug className="h-4 w-4" /> hold to froth
          </button>
          {milk && (
            <div className="h-2 w-32 overflow-hidden rounded-full bg-sky-soft">
              <div className="h-full bg-cobalt" style={{ width: `${froth}%` }} />
            </div>
          )}
        </div>
        <p className="min-h-[2rem] font-hand text-2xl text-cobalt">{status}</p>
      </div>
    </div>
  )
}

function useTicker(start: number, max: number) {
  const [s, setS] = useState(start)
  useEffect(() => {
    const t = setInterval(() => setS((v) => (v >= max ? start : v + 1)), 1000)
    return () => clearInterval(t)
  }, [start, max])
  const hh = String(Math.floor(s / 3600)).padStart(2, '0')
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

function VlogVault() {
  const time = useTicker(3 * 3600 + 59 * 60 + 41, 4 * 3600 + 30)
  const [knocked, setKnocked] = useState(false)

  return (
    <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-ink p-7 text-paper sm:p-8">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-paper/60">
          the vlog vault
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-red-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" /> rec
        </span>
      </div>

      {/* a tiny timeline, like my editing screen at 2am */}
      <div className="flex flex-col gap-1.5">
        {[
          ['w-2/5', 'w-1/5', 'w-1/4'],
          ['w-1/4', 'w-2/5', 'w-1/6'],
          ['w-1/3', 'w-1/3'],
        ].map((row, r) => (
          <div key={r} className="flex gap-1">
            {row.map((w, i) => (
              <div
                key={i}
                className={cn(
                  'h-5 rounded-sm',
                  w,
                  r === 0 ? 'bg-cobalt' : r === 1 ? 'bg-sky-stripe/70' : 'bg-paper/25',
                )}
              />
            ))}
          </div>
        ))}
        <div className="mt-1 flex justify-between font-mono text-[11px] text-paper/60">
          <span>session timer</span>
          <span className="tabular-nums text-paper">{time}</span>
        </div>
      </div>

      <div>
        <Film className="mb-3 h-7 w-7 text-sky-stripe" />
        <h3 className="font-serif text-3xl leading-tight">
          i could edit vlogs for four hours straight.
        </h3>
        <p className="mt-2 text-sm text-paper/70">
          they live on my private ig. get to know me first, and i&apos;ll show you{' '}
          <span className="font-hand text-lg">(wink)</span>
        </p>
        <AnimatePresence mode="wait">
          {!knocked ? (
            <motion.button
              key="knock"
              exit={{ opacity: 0 }}
              onClick={() => setKnocked(true)}
              className="mt-5 rounded-full border border-paper/40 px-5 py-2 font-mono text-xs uppercase tracking-widest hover:bg-paper hover:text-ink"
            >
              knock knock 🚪
            </motion.button>
          ) : (
            <motion.p
              key="answer"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-sm"
            >
              <span className="font-hand text-2xl text-sky-stripe">who&apos;s there? you!</span>
              <br />
              send a request with a little hello and{' '}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-sky-stripe underline-offset-4"
              >
                i might just let you in →
              </a>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Espanol() {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const phrase = spanishPhrases[i]

  const next = () => {
    if (!flipped) return setFlipped(true)
    setFlipped(false)
    setI((v) => (v + 1) % spanishPhrases.length)
  }

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-paper p-7 sm:p-8">
      <div className="flex items-center justify-between">
        <Label>yo hablo un poco español</Label>
        <span className="rounded-full bg-cobalt px-3 py-1 font-mono text-[11px] text-paper">
          A2
        </span>
      </div>
      <div>
        <div className="flex items-end justify-between">
          <p className="font-serif text-5xl">
            nivel <em className="text-cobalt">34</em>
          </p>
          <p className="pb-1 font-mono text-[11px] text-ink/50">en duolingo 🦉</p>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-sky-soft">
          <div className="stripes-bold h-full w-[68%] rounded-full" />
        </div>
      </div>
      <button
        onClick={next}
        className="grid-paper flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-ink/10 px-4 text-center transition-colors hover:border-cobalt"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`${i}-${flipped}`}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn('text-2xl', flipped ? 'font-hand text-3xl text-cobalt' : 'font-serif')}
          >
            {flipped ? phrase.en : phrase.es}
          </motion.span>
        </AnimatePresence>
        <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink/40">
          {flipped ? 'tap for otra' : 'tap to translate'}
        </span>
      </button>
      <p className="text-sm text-ink/70">creo que el español es muy cool. ¿practicamos juntos?</p>
    </div>
  )
}

function Wardrobe() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-3xl bg-paper p-7 sm:p-10 lg:col-span-2">
      <Label>my entire closet, basically</Label>
      <div className="flex flex-wrap items-end gap-3 sm:gap-5">
        {wardrobe.map((w, i) => (
          <div key={w.name} className="group flex flex-col items-center gap-2">
            <div
              className={cn(
                'h-28 w-16 rounded-t-full transition-transform group-hover:-translate-y-2 sm:h-40 sm:w-24',
                w.className,
                i === wardrobe.length - 1 && 'ring-2 ring-cobalt ring-offset-4 ring-offset-paper',
              )}
            />
            <span className="font-mono text-[11px] uppercase tracking-widest">{w.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="max-w-md font-serif text-4xl leading-tight">
          black, white, blue &amp; jeans. <em className="text-cobalt">that&apos;s it.</em>
        </h3>
        <p className="max-w-[16rem] font-hand text-2xl leading-tight text-cobalt">
          the striped one is my favorite pants. yes, my bedsheets match.
        </p>
      </div>
    </div>
  )
}

export default function LittleThings() {
  return (
    <section className="w-full px-3 sm:px-6">
      <div className="rounded-[40px] bg-sky-soft px-4 py-16 sm:px-10 sm:py-20">
        <div className="mb-12 text-center">
          <Label>let&apos;s start with the small stuff</Label>
          <h2 className="mt-3 font-serif text-5xl sm:text-6xl">
            the little things that make me, <em className="text-cobalt">me</em>
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          <CoffeeLab />
          <VlogVault />
          <Espanol />
          <Wardrobe />
        </div>
      </div>
    </section>
  )
}
