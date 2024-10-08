import { FlippingGaby } from '../ui/flipping-gaby'
import { BentoGrid } from '../ui/bento-grid'
export default function Hero() {
  return (
    <div className="flex w-full max-w-xl items-center px-10 py-10 xl:h-screen xl:max-w-none xl:justify-start 2xl:px-0">
      <div className="flex flex-col items-start justify-start gap-10 xl:flex-row xl:gap-20">
        <div className="flex h-full flex-col gap-5 text-left xl:w-1/3 xl:justify-start">
          <FlippingGaby />
          <h1 className="mt-5 text-4xl font-semibold tracking-wide xl:text-5xl">
            Gabrielle Suharjono
          </h1>
          <p className="text-base font-light tracking-wide xl:text-lg">
            currently learning something{' '}
            <span className="animate-pulse font-mono font-semibold italic">new</span> everyday in
            frontend dev, AI, and cloud! 🤓 📚
          </p>
          <p className="text-base font-light xl:text-lg">
            always eager to connect with <span className="font-serif italic">creative people</span>{' '}
            💃
          </p>
        </div>
        <BentoGrid />
      </div>
    </div>
  )
}
