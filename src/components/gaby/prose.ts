// typography for markdown write-ups, in the homepage's voice:
// serif headings, cobalt links, soft ink body, striped-ish code blocks.
export const proseClass = [
  'prose prose-lg max-w-none text-ink/80',
  'prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-ink',
  'prose-h2:mt-12 prose-h2:text-4xl prose-h3:text-2xl',
  'prose-strong:font-semibold prose-strong:text-ink',
  'prose-a:text-cobalt prose-a:decoration-2 prose-a:underline-offset-4',
  'prose-li:marker:text-cobalt prose-blockquote:border-cobalt prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:font-normal prose-blockquote:not-italic',
  'prose-code:rounded prose-code:bg-sky-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:text-cobalt-deep prose-code:before:content-none prose-code:after:content-none',
  'prose-pre:rounded-2xl prose-pre:bg-ink prose-pre:font-mono prose-pre:text-sm',
  'prose-img:rounded-xl prose-hr:border-dashed prose-hr:border-ink/20',
].join(' ')
