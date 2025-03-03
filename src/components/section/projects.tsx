import { ImageCard } from '@/components/ui/project-card'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="my-20 flex w-full max-w-xl flex-col items-center justify-center px-10 xl:max-w-none xl:px-20">
      <h2 className="mb-3 text-center text-4xl font-bold">my recent projects.</h2>
      <p className="text-center text-lg font-light">
        i&apos;m a kinesthetic learner, i prefer to learn by doing
      </p>
      <div className="mt-20 grid w-full grid-cols-1 gap-10 xl:grid-cols-2">
        {projects.map((project) => (
          <ImageCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
