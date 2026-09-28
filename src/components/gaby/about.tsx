import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { friendQuiz, tickerWords } from '@/data/me'
import { Asterisk, Film, Heart, Mug, Record, Squiggle } from './doodles'

export function Ticker() {
  // one "lap" repeats the words enough times to be wider than any screen. two
  // identical laps sit side by side and slide exactly one lap (-50%), so the loop
  // is seamless. spacing lives in padding (not flex gap) so both laps are equal.
  const lap = [...tickerWords, ...tickerWords, ...tickerWords]
  return (
    <div className="mx-3 mt-5 overflow-hidden border-y border-ink/15 bg-paper py-3 sm:mx-6">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {lap.map((w, i) => (
              <span
                key={i}
                className="flex items-center gap-6 whitespace-nowrap pr-6 font-mono text-xs uppercase tracking-widest"
              >
                {w}
                <Asterisk className="h-3.5 w-3.5 text-cobalt" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="mx-1 inline-flex h-[0.95em] w-[0.95em] translate-y-[0.08em] items-center justify-center rounded-full bg-sky-stripe align-baseline text-cobalt sm:mx-2">
    {children}
  </span>
)

function FriendQuiz() {
  const [step, setStep] = useState(-1)
  const [matches, setMatches] = useState(0)

  // the previous question is still fading out for a moment; ignore clicks on it
  const current = useRef(step)
  current.current = step
  const answer = (at: number, choice: 0 | 1) => {
    if (at !== current.current) return
    current.current = at + 1
    if (choice === friendQuiz[at].gaby) setMatches((m) => m + 1)
    setStep(at + 1)
  }
  const reset = () => {
    setStep(-1)
    setMatches(0)
  }

  const done = step >= friendQuiz.length
  const verdict =
    matches >= 4
      ? 'okay we’re basically already friends. come say hi ↓'
      : matches >= 2
        ? 'different enough to be interesting. that’s my favorite kind of person.'
        : 'we’re opposites, which means we’d have the best conversations.'

  return (
    <div className="relative mx-auto w-full max-w-xl rounded-3xl border-2 border-dashed border-cobalt/60 bg-paper px-6 py-10 text-center sm:px-10">
      <span className="bg-sky-stripe px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-cobalt-deep">
        before you scroll any further
      </span>

      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-5"
          >
            <h3 className="font-serif text-4xl leading-tight sm:text-5xl">would we be friends?</h3>
            <p className="mt-2 text-ink/70">five tiny questions. no wrong answers, promise.</p>
            <button
              onClick={() => setStep(0)}
              className="mt-6 rounded-full bg-cobalt px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-paper hover:bg-cobalt-deep"
            >
              let&apos;s find out
            </button>
          </motion.div>
        )}

        {step >= 0 && !done && (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mt-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
              {step + 1} / {friendQuiz.length}
            </p>
            <h3 className="mt-2 font-serif text-4xl">{friendQuiz[step].q}</h3>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              {friendQuiz[step].options.map((opt, i) => (
                <button
                  key={opt}
                  onClick={() => answer(step, i as 0 | 1)}
                  className="rounded-full border border-ink/20 px-5 py-2.5 text-sm transition-colors hover:border-cobalt hover:bg-sky-soft"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {done && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-5"
          >
            <p className="font-hand text-3xl text-cobalt">
              {matches}/{friendQuiz.length} match
            </p>
            <h3 className="mt-1 font-serif text-3xl leading-snug sm:text-4xl">{verdict}</h3>
            <button
              onClick={reset}
              className="mt-5 font-mono text-[11px] uppercase tracking-widest text-ink/60 underline underline-offset-4 hover:text-cobalt"
            >
              try again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const intro = [
  { text: 'i’m a people-watcher,', Icon: Heart },
  { text: 'a homemade coffee maker,', Icon: Mug },
  { text: 'a 4-hours-straight vlog editor,', Icon: Film },
  { text: 'a LANY-and-oldies girl', Icon: Record },
]

export default function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-6 px-5 py-24 sm:px-10">
      <p className="mx-auto max-w-6xl text-center font-serif text-4xl leading-[1.2] sm:text-5xl lg:text-6xl">
        {intro.map(({ text, Icon }) => (
          <span key={text}>
            {text.split(' ').slice(0, -1).join(' ')}{' '}
            {/* keep the last word glued to its icon so the chip never wraps alone */}
            <span className="whitespace-nowrap">
              {text.split(' ').at(-1)}
              <Chip>
                <Icon className="h-[0.6em] w-[0.6em]" />
              </Chip>
            </span>{' '}
          </span>
        ))}
        &amp; someone who <em className="text-cobalt">dances around the kitchen.</em>
      </p>
      {/* a little footnote for the kitchen dancing */}
      <div className="mx-auto mt-3 flex max-w-6xl justify-center lg:justify-end lg:pr-[12%]">
        <div className="flex -rotate-2 items-start gap-2 text-cobalt">
          <svg
            viewBox="0 0 40 40"
            className="mt-1 h-8 w-8 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M34 34C18 32 10 22 12 6" />
            <path d="M6 12l6-7 6 7" />
          </svg>
          <p className="font-hand text-2xl leading-tight sm:text-3xl">
            only if you know me well enough ;)
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-4xl">
        <Squiggle className="absolute -left-4 top-1/3 hidden w-40 rotate-12 -scale-x-100 text-ink/70 lg:block" />
        <Squiggle className="absolute -right-4 top-1/2 hidden w-40 text-ink/70 lg:block" />
        <FriendQuiz />
      </div>
    </section>
  )
}
