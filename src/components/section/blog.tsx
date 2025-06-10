import { blogPosts } from '@/data/blog'
import { BlogCard } from '../ui/blog-card'

export default function Blog() {
  const latestPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <section className="my-24 flex w-full max-w-xl flex-col items-center justify-center px-6 sm:px-10 xl:max-w-none xl:px-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">my thoughts, documented</h2>
        <p className="mx-auto max-w-2xl text-lg font-light text-neutral-600">
          thoughts, gotchas, and stories
        </p>
      </div>

      <div className="mt-8 grid w-full grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {latestPosts.map((post, idx) => (
          <BlogCard key={post.slug} post={post} colorIndex={idx} />
        ))}
      </div>

      {/* <a
        href="/blog"
        className="mt-16 rounded-lg bg-neutral-100 px-6 py-3 text-base font-medium text-neutral-800 transition-all hover:bg-neutral-200 hover:shadow-md"
      >
        See more blog posts
      </a> */}
    </section>
  )
}
