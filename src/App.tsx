import Contact from '@/components/section/contact'
import Hero from '@/components/section/hero'
import Projects from './components/section/projects'
import Gallery from './components/section/gallery'
export default function App() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-white text-neutral-800">
      <Hero />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  )
}
