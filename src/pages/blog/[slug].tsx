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
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Post not found</h1>
        <button
          onClick={() => navigate('/')}
          className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-200 hover:shadow-sm"
        >
          Back to home
        </button>
      </div>
    )
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 sm:px-8 md:py-24">
      <nav className="mb-12">
        <button
          onClick={() => navigate('/')}
          className="group inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-200 hover:shadow-sm"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to home
        </button>
      </nav>

      <article className="prose prose-neutral max-w-none">
        <header className="not-prose mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.author && (
              <>
                <span>·</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
        </header>

        <div className="prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h3:text-xl prose-p:text-neutral-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:rounded-md prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none">
          <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </Markdown>
        </div>
      </article>
    </main>
  )
}
