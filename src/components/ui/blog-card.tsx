import { Link } from 'react-router-dom'
import { BlogCover } from './blog-cover'
import type { BlogPost } from '@/data/blog'

export function BlogCard({ post, colorIndex }: { post: BlogPost; colorIndex: number }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <BlogCover title={post.title} colorIndex={colorIndex} />

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors group-hover:text-blue-600">
          {post.title}
        </h3>

        <time className="mb-3 text-sm text-neutral-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <p className="mb-4 line-clamp-3 flex-1 text-base text-neutral-600">{post.summary}</p>

        <span className="inline-flex items-center gap-1 font-medium text-blue-600">
          Continue Reading{' '}
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
