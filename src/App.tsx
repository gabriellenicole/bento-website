import Contact from '@/components/section/contact'
import Hero from '@/components/section/hero'
import Projects from './components/section/projects'
import Gallery from './components/section/gallery'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Posts from './components/section/posts'
import PostDetail from './components/section/PostDetail'

export default function App() {
  return (
    <Router>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-white text-neutral-800">
        <nav className="flex w-full justify-end space-x-4 p-4 text-neutral-800">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/posts" className="hover:underline">
            Posts
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Posts />
                <Gallery />
                <Contact />
              </>
            }
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  )
}
