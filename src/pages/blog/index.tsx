import { useEffect } from 'react'
import { blogPosts } from '@/data/blog'
import { writingNote } from '@/data/me'
import { BlogCard } from '@/components/ui/blog-card'
import { SubpageShell } from '@/components/gaby/subpage'

export default function BlogIndex() {
  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SubpageShell>
      <div className="px-3 pb-24 sm:px-6">
        <div className="rounded-[40px] bg-sky-soft px-4 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
              things i wrote
            </p>
            <h1 className="mt-3 font-serif text-6xl sm:text-7xl">
              thoughts, <em className="text-cobalt">documented.</em>
            </h1>
            <p className="mx-auto mt-4 max-w-md font-hand text-2xl leading-tight text-cobalt">
              {writingNote}
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sortedPosts.map((post, idx) => (
              <BlogCard key={post.slug} post={post} colorIndex={idx} />
            ))}
          </div>
        </div>
      </div>
    </SubpageShell>
  )
}
