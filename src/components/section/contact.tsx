import { BackgroundLines } from '@/components/ui/background-lines'
import { GmailIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/icons'
import { TelegramIcon } from '@/components/ui/icons'

export default function Contact() {
  return (
    <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
      <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-3xl font-bold tracking-wide text-transparent md:py-10 md:text-4xl lg:text-5xl">
        let&apos;s discuss on <br />
        something <span className="font-serif italic">cool</span> together!
      </h2>
      <div className="flex items-center gap-8">
        <TelegramIcon
          className="w-8 lg:w-20"
          onClick={() => window.open('https://t.me/gabriellenicole', '_blank')}
        />
        <GmailIcon
          className="w-8 lg:w-20"
          onClick={() => window.open('mailto:gabrielle.nicole03@gmail.com', '_blank')}
        />
        <InstagramIcon
          className="w-8 lg:w-20"
          onClick={() => window.open('https://www.instagram.com/gabriellenicolees/', '_blank')}
        />
        <LinkedInIcon
          className="w-8 lg:w-20"
          onClick={() => window.open('https://www.linkedin.com/in/gabrielle-nicole/', '_blank')}
        />
      </div>
    </BackgroundLines>
  )
}
