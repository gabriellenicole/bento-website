import Contact from '@/components/section/contact'
import Hero from '@/components/section/hero'
import Projects from './components/section/projects'
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-neutral-800">
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}
