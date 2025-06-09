import { useNavigate } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import { BlogCard } from '@/components/ui/blog-card'

export default function BlogIndex() {
  const navigate = useNavigate()
  return (
    <div className="my-20 flex w-full max-w-xl flex-col items-center justify-center px-10 xl:max-w-none xl:px-20">
      <button
        onClick={() => navigate('/')}
        className="mb-8 self-start rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
      >
        ← Back to home
      </button>
      <h2 className="mb-3 text-center text-4xl font-bold">my latest blog posts.</h2>
      <p className="text-center text-lg font-light">
        thoughts, tutorials, and stories from my journey as a developer
      </p>
      <div className="mt-20 grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <BlogCard key={post.slug} post={post} colorIndex={idx} />
        ))}
      </div>
    </div>
  )
}
