import { Link } from 'react-router-dom'
import { BlogCover } from './blog-cover'
import type { BlogPost } from '@/data/blog'
import { formatDate } from '@/lib/utils'

export function BlogCard({ post, colorIndex }: { post: BlogPost; colorIndex: number }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-3xl bg-paper p-5 transition-transform duration-300 hover:-translate-y-1"
    >
      <BlogCover title={post.title} colorIndex={colorIndex} />

      <div className="flex flex-1 flex-col gap-2 px-1">
        <time
          className="font-mono text-[11px] uppercase tracking-widest text-ink/50"
          dateTime={post.date}
        >
          {formatDate(post.date)}
        </time>
        <h3 className="font-serif text-3xl leading-tight group-hover:text-cobalt">{post.title}</h3>
        <p className="line-clamp-3 flex-1 text-ink/70">{post.summary}</p>
        <span className="mt-2 font-mono text-[11px] uppercase tracking-widest text-cobalt">
          read it{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
