/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import Markdown from 'react-markdown'

interface MarkdownRendererProps {
  content: string
  className?: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  return (
    <Markdown
      className={`prose prose-neutral dark:prose-invert mx-auto max-w-3xl ${className}`}
      components={{
        h1: ({ node, ...props }) => (
          <h1
            className="mb-8 border-b bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-neutral-400"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className="mb-6 mt-12 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className="mb-4 mt-8 text-xl font-medium tracking-tight text-neutral-800 dark:text-neutral-200"
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className="border-b border-neutral-400 text-neutral-900 transition-all hover:border-neutral-800 hover:text-neutral-800 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-neutral-400"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul className="mb-6 list-none space-y-2 pl-6 marker:text-neutral-400" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="mb-6 list-decimal space-y-2 pl-6 marker:text-neutral-400" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-neutral-700 dark:text-neutral-300" {...props} />
        ),
        code: ({ node, children, className, ...props }) => {
          const isBlock = className?.includes('language-')
          return (
            <code
              className={`${isBlock ? 'block overflow-x-auto rounded-lg bg-neutral-100 p-4' : 'rounded-md py-0.5 text-pink-700'} font-mono text-sm dark:bg-neutral-800 dark:text-neutral-200`}
              {...props}
            >
              {children}
            </code>
          )
        },
        pre: ({ node, ...props }) => (
          <pre
            className="mb-6 overflow-x-auto rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800"
            {...props}
          />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-neutral-300 pl-4 italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
            {...props}
          />
        ),
        img: ({ node, ...props }) => <img className="rounded-lg" {...props} />,
      }}
    >
      {content}
    </Markdown>
  )
}

export default MarkdownRenderer
