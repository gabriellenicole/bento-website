import { useParams, useNavigate } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <button
          onClick={() => navigate('/blog')}
          className="mt-4 rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
        >
          Back to blog
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
      >
        ← Back
      </button>
      <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
      <div className="mb-6 text-sm text-gray-500">
        {post.date} {post.author && <>· {post.author}</>}
      </div>
      <article className="prose prose-neutral max-w-none">
        <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {post.content}
        </Markdown>
      </article>
    </div>
  )
}
