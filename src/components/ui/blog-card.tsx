import { Link } from 'react-router-dom'
import { BlogCover } from './blog-cover'
import type { BlogPost } from '@/data/blog'

export function BlogCard({ post, colorIndex }: { post: BlogPost; colorIndex: number }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-neutral-50 p-6 shadow-sm">
      <BlogCover title={post.title} colorIndex={colorIndex} />
      <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
      <div className="mb-2 text-sm text-neutral-600">{post.date}</div>
      <p className="mb-4 line-clamp-3 text-base text-neutral-700">{post.summary}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="mt-auto flex items-center gap-1 font-medium text-blue-600 hover:underline"
      >
        Continue Reading <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
