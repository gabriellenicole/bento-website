import { useNavigate } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import { BlogCard } from '@/components/ui/blog-card'
import { useEffect } from 'react'

export default function BlogIndex() {
  const navigate = useNavigate()
  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 sm:px-8 md:py-24">
      <nav className="mb-12">
        <button
          onClick={() => navigate('/')}
          className="group inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-200 hover:shadow-sm"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to home
        </button>
      </nav>

      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">my blog posts.</h1>
        <p className="mx-auto max-w-2xl text-lg font-light text-neutral-600">
          thoughts, gotchas, and stories
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {sortedPosts.map((post, idx) => (
          <BlogCard key={post.slug} post={post} colorIndex={idx} />
        ))}
      </div>
    </main>
  )
}
