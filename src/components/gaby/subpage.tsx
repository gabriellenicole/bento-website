// shared bits for the project + blog pages, so they feel like the homepage.
import { Link } from 'react-router-dom'
import { Footer } from './work-and-footer'

export function SubpageNav({ back = { to: '/', label: 'back home' } }) {
  return (
    <nav className="flex items-center justify-between px-5 py-4 font-mono text-[11px] uppercase tracking-widest sm:px-8">
      <Link to={back.to} className="hover:text-cobalt">
        (← {back.label})
      </Link>
      <Link to="/" className="font-serif text-2xl normal-case tracking-normal hover:text-cobalt">
        gaby<span className="text-cobalt">.</span>
      </Link>
    </nav>
  )
}

export function SubpageShell({
  children,
  back,
}: {
  children: React.ReactNode
  back?: { to: string; label: string }
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-x-clip pt-1">
      <SubpageNav back={back} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export function NotFound({ what }: { what: string }) {
  return (
    <SubpageShell>
      <div className="flex flex-col items-center gap-4 px-5 py-32 text-center">
        <p className="font-hand text-3xl text-cobalt">hmm.</p>
        <h1 className="font-serif text-5xl">that {what} doesn&apos;t exist (yet).</h1>
        <Link
          to="/"
          className="mt-4 rounded-full bg-cobalt px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper"
        >
          take me home
        </Link>
      </div>
    </SubpageShell>
  )
}
