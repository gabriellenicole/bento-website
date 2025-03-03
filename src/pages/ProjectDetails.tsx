import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { projects } from '@/data/projects'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 flex items-center gap-2 rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start justify-start px-6 py-12 md:px-0">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </button>

      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="mt-2 text-lg text-neutral-600">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.content && (
          <article className="prose prose-neutral max-w-none">
            <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
              {project.content}
            </Markdown>
          </article>
        )}
      </div>
    </div>
  )
}
