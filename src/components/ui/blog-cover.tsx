const COLORS = [
  'from-sky-200 to-sky-300', // blue
  'from-purple-200 to-purple-300', // purple
  'from-pink-100 to-pink-200', // pink
  'from-yellow-100 to-yellow-200', // yellow
  'from-green-100 to-green-200', // green
]

export function BlogCover({ title, colorIndex = 0 }: { title: string; colorIndex?: number }) {
  const gradientColor = COLORS[colorIndex % COLORS.length]

  return (
    <div
      className={`relative mb-6 flex h-40 w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradientColor}`}
    >
      {/* Decorative elements */}
      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/20" />
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-white/20" />

      {/* Content */}
      <div className="z-10 px-4 text-center">
        <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm font-medium text-neutral-700">✦ gabrielle nicole</span>
        </div>
      </div>
    </div>
  )
}
