import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { projects } from '@/data/projects'
import { useScrollRestoration } from '@/lib/utils'
import { NotFound, SubpageShell } from '@/components/gaby/subpage'
import { proseClass } from '@/components/gaby/prose'
import { Squiggle } from '@/components/gaby/doodles'

const Polaroid = ({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string
  alt: string
  caption?: string
  className?: string
}) => (
  <figure
    className={`bg-paper p-2.5 pb-3 shadow-[0_12px_30px_-12px_rgba(21,23,31,0.45)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] ${className}`}
  >
    <img src={src} alt={alt} className="aspect-[4/3] w-full bg-cream object-cover object-top" />
    {caption && (
      <figcaption className="pt-2 text-center font-hand text-xl text-ink/70">{caption}</figcaption>
    )}
  </figure>
)

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>()
  useScrollRestoration()

  const index = projects.findIndex((p) => p.id === projectId)
  const project = projects[index]
  if (!project) return <NotFound what="project" />

  const next = projects[(index + 1) % projects.length]
  const links = [
    project.deploymentUrl && { label: 'see it live', href: project.deploymentUrl },
    project.githubUrl && { label: 'code', href: project.githubUrl },
    project.figmaUrl && { label: 'figma', href: project.figmaUrl },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <SubpageShell>
      <header className="mx-3 grid overflow-hidden rounded-[28px] border border-ink/10 sm:mx-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative flex flex-col justify-center gap-5 bg-paper px-7 py-14 sm:px-14">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
            things i made · {String(index + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </p>
          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl">
            {project.title}
          </h1>
          <p className="max-w-md font-hand text-3xl leading-tight text-cobalt">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>
          {links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    i === 0
                      ? 'rounded-full bg-cobalt px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:-translate-y-0.5'
                      : 'rounded-full border border-ink/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-cobalt hover:bg-sky-soft'
                  }
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="stripes relative flex min-h-[380px] items-center justify-center px-8 py-14">
          <div className="relative w-full max-w-md">
            <Polaroid
              src={project.image.src2}
              alt=""
              className="absolute inset-x-6 top-6 rotate-3 opacity-95"
            />
            <Polaroid
              src={project.image.src1}
              alt={project.image.alt}
              className="relative -rotate-2"
            />
            <span className="tape -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-5 py-16 sm:py-20">
        <div className={proseClass}>
          <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {project.content}
          </Markdown>
        </div>
      </article>

      {project.shots && (
        <section className="mx-auto grid max-w-5xl gap-10 px-5 pb-16 sm:grid-cols-2">
          {project.shots.map((s, i) => (
            <Polaroid
              key={s.caption}
              src={s.src}
              alt={s.caption}
              caption={s.caption}
              className={i % 2 ? 'rotate-1' : '-rotate-1'}
            />
          ))}
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-10">
        <Link
          to={`/project/${next.id}`}
          className="group relative flex flex-col gap-2 overflow-hidden rounded-3xl bg-sky-soft px-7 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">next up</p>
            <p className="font-serif text-4xl group-hover:text-cobalt sm:text-5xl">{next.title}</p>
            <p className="mt-1 text-ink/70">{next.description}</p>
          </div>
          <Squiggle className="w-28 shrink-0 text-cobalt transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </SubpageShell>
  )
}
