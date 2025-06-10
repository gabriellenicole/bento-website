import Contact from '@/components/section/contact'
import Hero from '@/components/section/hero'
import Projects from './components/section/projects'
import Gallery from './components/section/gallery'
import Blog from './components/section/blog'
import { useScrollRestoration } from './lib/utils'

export default function App() {
  // Enable scroll position restoration
  useScrollRestoration()

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-white text-neutral-800">
      <Hero />
      <Blog />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  )
}
