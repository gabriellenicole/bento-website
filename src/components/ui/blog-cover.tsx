import { cn } from '@/lib/utils'

// a little striped "notebook cover" per post, all in the blue family
const PATTERNS = ['stripes', 'grid-paper bg-paper', 'stripes-diag bg-sky-soft', 'bg-cobalt']
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export function BlogCover({ title, colorIndex = 0 }: { title: string; colorIndex?: number }) {
  const i = colorIndex % PATTERNS.length

  return (
    <div
      className={cn(
        'relative mb-6 flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-ink/10',
        PATTERNS[i],
      )}
    >
      <div
        className={cn(
          'max-w-[80%] bg-paper px-5 py-3 text-center shadow-[0_8px_20px_-10px_rgba(21,23,31,0.4)] transition-transform duration-300 group-hover:rotate-0',
          TILTS[i],
        )}
      >
        <p className="font-serif text-2xl leading-tight text-ink">{title}</p>
        <p className="mt-1 font-hand text-lg text-cobalt">by gaby (+ a little AI)</p>
      </div>
    </div>
  )
}
