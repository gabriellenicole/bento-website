import { blogPosts } from '@/data/blog'
import { BlogCard } from '../ui/blog-card'

export default function Blog() {
  const latestPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <div className="my-20 flex w-full max-w-xl flex-col items-center justify-center px-10 xl:max-w-none xl:px-20">
      <h2 className="mb-3 text-center text-4xl font-bold">my latest blog posts.</h2>
      <p className="text-center text-lg font-light">
        thoughts, tutorials, and stories from my journey as a developer
      </p>
      <div className="mt-20 grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {latestPosts.map((post, idx) => (
          <BlogCard key={post.slug} post={post} colorIndex={idx} />
        ))}
      </div>
      <a
        href="/blog"
        className="mt-12 rounded-md bg-neutral-100 px-6 py-3 text-lg font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
      >
        See more blog posts
      </a>
    </div>
  )
}
