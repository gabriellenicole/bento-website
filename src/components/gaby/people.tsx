import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryPhotos, questions } from '@/data/me'
import { Heart, Sparkle } from './doodles'

function QuestionDeck() {
  const [i, setI] = useState(0)
  const finished = i >= questions.length
  const last = i === questions.length - 1

  const cardMotion = {
    initial: { opacity: 0, y: 20, rotate: -4 },
    animate: { opacity: 1, y: 0, rotate: -1 },
    exit: { opacity: 0, x: 120, rotate: 12 },
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  } as const
  const cardClass =
    'absolute inset-0 flex flex-col justify-between rounded-3xl bg-paper p-7 text-left text-ink shadow-xl'

  return (
    <div className="relative mx-auto h-72 w-full max-w-sm">
      {/* the pile underneath */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-3xl bg-sky-stripe" />
      <div className="stripes absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-1 rounded-3xl" />
      <AnimatePresence mode="popLayout">
        {!finished ? (
          <motion.button key={i} onClick={() => setI(i + 1)} {...cardMotion} className={cardClass}>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink/50">
              <span>
                question no. {String(i + 1).padStart(2, '0')} / {questions.length}
              </span>
              <Heart className="h-4 w-4 text-cobalt" />
            </div>
            <p className="font-serif text-3xl leading-tight">{questions[i]}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cobalt">
              {last ? 'last one, promise →' : 'tap for another →'}
            </p>
          </motion.button>
        ) : (
          <motion.div key="done" {...cardMotion} className={cardClass}>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink/50">
              <span>bonus card</span>
              <Heart className="h-4 w-4 fill-cobalt text-cobalt" />
            </div>
            <div>
              <p className="font-serif text-3xl leading-tight">
                woah, you really went through <em className="text-cobalt">all</em> of them?
              </p>
              <p className="mt-2 font-hand text-2xl leading-tight text-cobalt">
                okay. i like you. please say hi to me.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#hi"
                className="rounded-full bg-cobalt px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-paper hover:bg-cobalt-deep"
              >
                say hi →
              </a>
              <button
                onClick={() => setI(0)}
                className="font-mono text-[10px] uppercase tracking-widest text-ink/50 underline underline-offset-4 hover:text-cobalt"
              >
                again?
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function People() {
  return (
    <section id="people" className="w-full scroll-mt-6 px-3 sm:px-6">
      <div className="relative overflow-hidden rounded-[40px] bg-cobalt px-6 py-20 text-paper sm:px-14 sm:py-24">
        <Sparkle className="absolute right-10 top-10 h-10 w-10 animate-wiggle text-sky-stripe" />
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-sky-stripe">
              the part i actually care about
            </p>
            <h2 className="font-serif text-5xl leading-[1.05] sm:text-6xl">
              i love people, and the way they think.{' '}
              <em className="text-sky-stripe">
                i hope i&apos;m building a life i dance around the kitchen in.
              </em>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-paper/80">
              it amazes me how different someone can be depending on what they&apos;ve been through.
              same city, same age, same coffee order, and still a completely different way of seeing
              the world. that&apos;s the stuff i want to hear about.
            </p>
            <p className="font-hand text-3xl text-sky-stripe">
              so here&apos;s a question for you &rarr;
            </p>
          </div>
          <QuestionDeck />
        </div>
      </div>
    </section>
  )
}

const tilt = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1']

export function Gallery() {
  return (
    <section className="w-full overflow-hidden py-24">
      <div className="mb-12 px-5 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
          the camera roll
        </p>
        <h2 className="mt-3 font-serif text-5xl sm:text-6xl">
          photos of me, <em className="text-cobalt">or by me</em>
        </h2>
      </div>
      <div className="flex snap-x gap-6 overflow-x-auto px-6 pb-10 pt-4 sm:px-10">
        {galleryPhotos.map((src, i) => (
          <figure
            key={src}
            className={`relative w-56 shrink-0 snap-center bg-paper p-2.5 pb-8 shadow-[0_10px_25px_-12px_rgba(21,23,31,0.4)] transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-105 sm:w-64 ${tilt[i % tilt.length]}`}
          >
            {i % 3 === 0 && <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />}
            <img src={src} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </figure>
        ))}
      </div>
    </section>
  )
}
