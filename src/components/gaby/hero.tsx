import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroPhotos } from '@/data/me'
import { CircleText, Sparkle, Squiggle } from './doodles'

type Card = { kind: 'photo'; src: string; caption: string } | { kind: 'note'; caption: string }

const cards: Card[] = [
  ...heroPhotos.map((p) => ({ kind: 'photo' as const, ...p })),
  { kind: 'note', caption: 'one of us, soon?' },
]

const tilts = [-4, 3, -1.5, 2, -2.5, 1]

function PolaroidStack() {
  const [order, setOrder] = useState(() => cards.map((_, i) => i))

  const shuffle = () => setOrder(([first, ...rest]) => [...rest, first])

  return (
    <button
      type="button"
      onClick={shuffle}
      aria-label="shuffle photos"
      className="group relative h-[330px] w-[240px] cursor-pointer sm:h-[410px] sm:w-[300px]"
    >
      <AnimatePresence initial={false}>
        {order
          .slice()
          .reverse()
          .map((cardIdx, i) => {
            const depth = Math.min(order.length - 1 - i, 2) // 0 is top; only 3 cards peek
            const card = cards[cardIdx]
            return (
              <motion.div
                key={cardIdx}
                layout
                initial={false}
                animate={{
                  rotate: tilts[cardIdx % tilts.length] + depth * 2.5,
                  y: depth * 6,
                  x: depth * 8,
                  scale: 1 - depth * 0.03,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="absolute inset-0 flex flex-col overflow-hidden bg-paper p-3 pb-0 shadow-[0_10px_30px_-10px_rgba(21,23,31,0.35)]"
                style={{ zIndex: i }}
              >
                {card.kind === 'photo' ? (
                  <img
                    src={card.src}
                    alt="gaby"
                    className="aspect-[4/5] w-full object-cover"
                    draggable={false}
                    // a photo that fails to load just leaves the stack
                    onError={() => setOrder((o) => o.filter((x) => x !== cardIdx))}
                  />
                ) : (
                  <div className="grid-paper flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-dashed border-cobalt/40 text-cobalt">
                    <span className="font-hand text-4xl">you + me</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest">
                      photo pending
                    </span>
                  </div>
                )}
                <p className="flex flex-1 items-center justify-center truncate px-1 font-hand text-lg leading-none text-ink/80 sm:text-xl">
                  {card.caption}
                </p>
              </motion.div>
            )
          })}
      </AnimatePresence>
      <span className="tape -top-3 left-1/2 z-20 -translate-x-1/2 -rotate-3" />
      <span className="absolute -bottom-12 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-ink/60 transition-colors group-hover:text-cobalt">
        (tap to shuffle)
      </span>
    </button>
  )
}

const navLeft = [
  { label: 'about', href: '#about' },
  { label: 'coffee', href: '#coffee' },
  { label: 'music', href: '#music' },
]
const navRight = [
  { label: 'people', href: '#people' },
  { label: 'work', href: '#work' },
  { label: 'say hi', href: '#hi' },
]

export default function Hero() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-5 py-4 font-mono text-[11px] uppercase tracking-widest sm:px-8">
        <div className="flex gap-3 sm:gap-6">
          {navLeft.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cobalt">
              ({l.label})
            </a>
          ))}
        </div>
        <div className="hidden gap-6 sm:flex">
          {navRight.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cobalt">
              ({l.label})
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-3 grid overflow-hidden rounded-[28px] border border-ink/10 sm:mx-6 lg:grid-cols-2">
        {/* the stripes, obviously */}
        <div className="stripes relative flex min-h-[500px] items-center justify-center py-16 lg:min-h-[640px]">
          <PolaroidStack />
          <div className="absolute right-3 top-3 h-20 w-20 text-cobalt sm:right-8 sm:top-8 sm:h-28 sm:w-28">
            <CircleText
              text="hola · soy gaby · nice to meet you · "
              className="absolute inset-0 animate-spin-slow"
            />
            <div className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-cobalt text-paper">
              <Sparkle className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center gap-6 bg-paper px-7 py-14 sm:px-14">
          <p className="font-hand text-2xl text-cobalt">(short for gabrielle)</p>
          <h1 className="font-serif text-7xl leading-[0.9] tracking-tight sm:text-8xl xl:text-9xl">
            hi, i&apos;m <em className="text-cobalt">gaby.</em>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink/80">
            i love people. how they think, what they love, and how differently we all turn out
            depending on what we&apos;ve lived through. this is a little corner of the internet
            that&apos;s just&hellip; me.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#about"
              className="rounded-full bg-cobalt px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:-translate-y-0.5"
            >
              get to know me ↓
            </a>
            <a
              href="#music"
              className="font-mono text-xs uppercase tracking-widest underline decoration-cobalt decoration-2 underline-offset-4 hover:text-cobalt"
            >
              or skip to the music
            </a>
          </div>
          {/* points down: "keep scrolling" */}
          <Squiggle className="absolute bottom-16 right-16 hidden w-28 rotate-[65deg] text-cobalt/60 xl:block" />
        </div>
      </div>
    </header>
  )
}
