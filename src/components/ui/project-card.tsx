import React, { useEffect, useState } from 'react'
import { motion, MotionValue, MotionStyle, useMotionTemplate, useMotionValue } from 'framer-motion'
import clsx from 'clsx'
import { useIsMobile } from '@/lib/utils'
import { Badge } from './badge'
import { FigmaIcon, GithubIcon } from './icons'
import { Globe } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  techStack?: string[]
  bgClass?: string
  children?: React.ReactNode
  githubUrl?: string
  figmaUrl?: string
  deploymentUrl?: string
}

type WrapperStyle = MotionStyle & {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

function FeatureCard({
  title,
  description,
  techStack,
  bgClass,
  children,
  githubUrl,
  figmaUrl,
  deploymentUrl,
}: CardProps) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (isMobile || !event.currentTarget) return
    const { left, top } = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="animated-feature-cards relative w-full drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] transition-all duration-300 hover:scale-[1.02]"
      onMouseMove={handleMouseMove}
      style={
        {
          '--x': useMotionTemplate`${mouseX}px`,
          '--y': useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={clsx(
          'group relative w-full overflow-hidden rounded-3xl border bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300',
          'md:hover:border-transparent',
          bgClass,
        )}
      >
        <div className="m-6 min-h-[330px] w-full sm:m-10 md:min-h-[450px]">
          <div className="flex w-5/6 flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight md:text-xl">{title}</h2>
              <div className="flex items-center gap-2">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-6 w-6 cursor-pointer rounded-full border border-gray-300 p-1 transition-all duration-300 hover:bg-neutral-800 hover:bg-opacity-10 md:h-8 md:w-8 md:border-none md:p-2" />
                  </a>
                )}
                {figmaUrl && (
                  <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                    <FigmaIcon className="h-6 w-6 cursor-pointer rounded-full border border-gray-300 p-1 transition-all duration-300 hover:bg-neutral-800 hover:bg-opacity-10 md:h-8 md:w-8 md:border-none md:p-2" />
                  </a>
                )}
                {deploymentUrl && (
                  <a href={deploymentUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-6 w-6 cursor-pointer rounded-full border border-gray-300 p-1 transition-all duration-300 hover:bg-neutral-800 hover:bg-opacity-10 md:h-8 md:w-8 md:border-none md:p-2" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-5 text-zinc-600 sm:text-base sm:leading-7">
              {description}
            </p>
            <div className="my-3 flex flex-wrap gap-2">
              {techStack?.map((tech) => <Badge key={tech}>{tech}</Badge>)}
            </div>
          </div>

          {mounted ? children : null}
        </div>
      </div>
    </motion.div>
  )
}

interface ImageCardProps extends CardProps {
  image: {
    src1: string
    src2: string
    alt: string
  }
}

export function ImageCard({ image, ...props }: ImageCardProps) {
  return (
    <FeatureCard {...props}>
      <>
        <img
          alt={image.alt}
          className="pointer-events-none left-[69px] top-[79%] w-[42%] scale-[150%] rounded-xl bg-neutral-50/30 transition-transform duration-500 max-md:rounded-sm sm:left-[40px] sm:top-[60%] sm:scale-100 md:-bottom-[1%] md:top-auto md:w-[69%] md:scale-100 md:group-hover:translate-x-2 md:group-hover:scale-95 xl:-bottom-[11%]"
          src={image.src1}
          style={{
            position: 'absolute',
            userSelect: 'none',
            maxWidth: 'unset',
          }}
        />

        <img
          alt={image.alt}
          className="pointer-events-none left-[50%] top-[79%] w-[50%] translate-x-0 scale-[190%] rounded-2xl bg-neutral-50/30 backdrop-blur-sm transition-transform duration-500 max-md:rounded-md sm:left-[39%] sm:top-[59%] sm:scale-[120%] md:-bottom-[2%] md:top-auto md:w-[77%] md:scale-100 md:group-hover:-translate-x-2 md:group-hover:scale-105 xl:-bottom-[12%]"
          src={image.src2}
          style={{
            position: 'absolute',
            userSelect: 'none',
            maxWidth: 'unset',
          }}
        />
      </>
    </FeatureCard>
  )
}
