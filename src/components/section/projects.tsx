import { ImageCard } from '@/components/ui/project-card'
import pintuAppFront from '@/assets/projects/pintu_app_1.png'
import pintuAppBack from '@/assets/projects/pintu_app_2.png'
import spotifyFront from '@/assets/projects/spotify_1.png'
import spotifyBack from '@/assets/projects/spotify_2.png'
import mlFront from '@/assets/projects/ml_1.png'
import mlBack from '@/assets/projects/ml_2.png'

const projects = [
  {
    title: 'PINTU App',
    description:
      'A web application to support day-to-day events for an Indonesians Association in Singapore',
    techStack: ['React', 'TypeScript', 'SaaS', 'Figma', 'Adobe Illustrator'],
    image: {
      src1: pintuAppBack,
      src2: pintuAppFront,
      alt: 'PINTU App',
    },
    deploymentUrl: 'https://app.pintusingapura.org',
    figmaUrl: 'https://bit.ly/pintu-app-figma',
    bgClass: 'bg-pintu',
  },
  {
    title: 'JamStream',
    description:
      'A Spotify clone with group session feature, where users can create rooms, listen to music together, and chat in real-time',
    techStack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Spotify API', 'Firebase'],
    image: {
      src1: spotifyBack,
      src2: spotifyFront,
      alt: 'PINTU App',
    },
    githubUrl: 'https://github.com/aftanza/DIP-Group-4',
    figmaUrl:
      'https://www.figma.com/design/gMIQ6WEVMcx6wvEDuRvBZ2/app-features-rough-draft?node-id=71-3474&t=aEqdiWd3V13V9GxV-1',
    bgClass: 'bg-jamstream',
  },
  {
    title: 'Spotify Songs: HIT or FLOP?',
    description:
      'Predicting if a song is inside hitlist, based on its feature, and analyzing the most important feature to predict hitlist songs',
    techStack: [
      'Machine Learning',
      'Python',
      'XGBoost',
      'Naive Bayes',
      'Decision Tree',
      'Random Forest',
    ],
    image: {
      src1: mlBack,
      src2: mlFront,
      alt: 'Spotify Songs: HIT or FLOP?',
    },
    githubUrl:
      'https://github.com/gabriellenicole/spotify-hitlist/blob/main/IE0005_MiniProject_SpotifyHitPredictor.ipynb',
    bgClass: 'bg-spotify',
  },
]

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
