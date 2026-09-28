import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'
import { socials } from '@/data/me'
import { Asterisk } from './doodles'

export function WorkCorner() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="work" className="w-full scroll-mt-6 px-5 pb-24 sm:px-10">
      <div className="mx-auto max-w-6xl border-t border-ink/15 pt-14">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-4xl sm:text-5xl">
            oh, and i also <em className="text-cobalt">build things.</em>
          </h2>
          <p className="max-w-xs font-hand text-2xl leading-tight text-ink/60">
            frontend, gen AI, cloud. i enjoy it, it&apos;s just not the most interesting part.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-ink/60">
              things i made
            </p>
            <ul>
              {projects.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/project/${p.id}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-dashed border-ink/15 py-3"
                  >
                    <span className="shrink-0 font-serif text-2xl group-hover:text-cobalt">
                      {p.title}
                    </span>
                    <span className="hidden text-right text-sm text-ink/60 sm:block">
                      {p.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-ink/60">
              things i wrote (mostly about books)
            </p>
            <ul>
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-dashed border-ink/15 py-3"
                  >
                    <span className="shrink-0 font-serif text-2xl group-hover:text-cobalt">
                      {p.title}
                    </span>
                    <span className="font-mono text-xs text-ink/50">{p.date.slice(0, 4)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/blog"
              className="mt-4 inline-block font-mono text-[11px] uppercase tracking-widest underline underline-offset-4 hover:text-cobalt"
            >
              all posts →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const links = [
  { label: 'instagram', href: socials.instagram, note: '(private, request away)' },
  { label: 'telegram', href: socials.telegram },
  { label: 'email', href: socials.email },
  { label: 'linkedin', href: socials.linkedin },
  { label: 'github', href: socials.github },
]

export function Footer() {
  return (
    <footer id="hi" className="w-full scroll-mt-6 px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="overflow-hidden rounded-[40px] bg-ink text-paper">
        <div className="flex flex-col items-center gap-6 px-6 pb-10 pt-20 text-center">
          <p className="font-hand text-3xl text-sky-stripe">okay, your turn.</p>
          <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">
            tell me about you. <em className="text-sky-stripe">over coffee, ideally.</em>
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-paper/30 px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-paper hover:text-ink"
              >
                {l.label}
                {l.note && (
                  <span className="ml-2 normal-case text-paper/50 transition-colors group-hover:text-ink/50">
                    {l.note}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="stripes-bold h-4 opacity-90" />
        <div className="flex flex-col items-center justify-between gap-3 px-8 py-6 font-mono text-[11px] uppercase tracking-widest text-paper/50 sm:flex-row">
          <span>© {new Date().getFullYear()} gabrielle suharjono</span>
          <span className="flex items-center gap-2">
            made with instant coffee <Asterisk className="h-3 w-3 text-sky-stripe" /> hecho con amor
          </span>
        </div>
      </div>
    </footer>
  )
}
