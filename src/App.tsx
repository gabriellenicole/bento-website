import Hero from '@/components/gaby/hero'
import About, { Ticker } from '@/components/gaby/about'
import LittleThings from '@/components/gaby/little-things'
import Music from '@/components/gaby/music'
import { Gallery, People } from '@/components/gaby/people'
import { Footer, WorkCorner } from '@/components/gaby/work-and-footer'
import { useScrollRestoration } from './lib/utils'

export default function App() {
  // Enable scroll position restoration
  useScrollRestoration()

  return (
    <main className="mx-auto flex max-w-[1440px] flex-col items-center overflow-x-clip pt-1">
      <Hero />
      <Ticker />
      <About />
      <LittleThings />
      <Music />
      <People />
      <Gallery />
      <WorkCorner />
      <Footer />
    </main>
  )
}
