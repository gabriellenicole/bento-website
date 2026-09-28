import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '@/data/blog'
import { formatDate, useScrollRestoration } from '@/lib/utils'
import { NotFound, SubpageShell } from '@/components/gaby/subpage'
import { proseClass } from '@/components/gaby/prose'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  useScrollRestoration()

  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
  const index = sorted.findIndex((p) => p.slug === slug)
  const post = sorted[index]
  if (!post) return <NotFound what="post" />

  const next = sorted[(index + 1) % sorted.length]

  return (
    <SubpageShell back={{ to: '/blog', label: 'all posts' }}>
      <article className="mx-auto max-w-2xl px-5 pb-16 pt-10 sm:pt-16">
        <header className="mb-12 border-b border-dashed border-ink/20 pb-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.author && <> · {post.author.toLowerCase()}</>}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-3 font-hand text-2xl text-cobalt">{post.summary}</p>
        </header>

        <div className={proseClass}>
          <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </Markdown>
        </div>
      </article>

      {next.slug !== post.slug && (
        <section className="mx-auto max-w-2xl px-5 pb-24">
          <Link
            to={`/blog/${next.slug}`}
            className="group block rounded-3xl bg-sky-soft px-7 py-8 transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">read next</p>
            <p className="mt-1 font-serif text-3xl group-hover:text-cobalt">{next.title} →</p>
          </Link>
        </section>
      )}
    </SubpageShell>
  )
}
