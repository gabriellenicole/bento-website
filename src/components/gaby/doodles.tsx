// little hand-drawn-ish marks, all one stroke color so they stay minimal.
import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const Asterisk = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
  </svg>
)

export const Mug = (p: P) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M6 11h16v9a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7z" />
    <path d="M22 13h2.5a3.5 3.5 0 0 1 0 7H22" />
    <path d="M11 4c-1 1.5 1 2.5 0 4M16 4c-1 1.5 1 2.5 0 4" />
  </svg>
)

export const Film = (p: P) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <rect x="4" y="7" width="24" height="18" rx="2" />
    <path d="M9 7v18M23 7v18M4 12h5M4 20h5M23 12h5M23 20h5" />
    <path d="M14 13l4 3-4 3z" />
  </svg>
)

export const Heart = (p: P) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M16 27S4 19.5 4 11.5A6 6 0 0 1 16 9a6 6 0 0 1 12 2.5C28 19.5 16 27 16 27z" />
  </svg>
)

export const Record = (p: P) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="16" r="3" />
    <path d="M16 8a8 8 0 0 1 8 8" />
  </svg>
)

export const Squiggle = (p: P) => (
  <svg viewBox="0 0 160 80" {...base} strokeWidth={2.2} {...p}>
    <path d="M4 20c30-18 52 10 36 26-12 12-22-8-6-16 22-11 44 24 76 26 18 1 30-8 40-18" />
    <path d="M140 30l10 8-12 4" />
  </svg>
)

export const Sparkle = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" />
  </svg>
)

// circular badge text, like a little sticker. the text is stretched to exactly
// one lap of the circle so the end never bumps into the start.
const LAP = 2 * Math.PI * 44
export const CircleText = ({ text, className }: { text: string; className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden>
    <defs>
      <path id="circle-path" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
    </defs>
    <text className="fill-current font-mono text-[10px] uppercase">
      <textPath href="#circle-path" textLength={LAP} lengthAdjust="spacing">
        {`${text.trim()}\u00A0\u00A0`}
      </textPath>
    </text>
  </svg>
)
