import pintuAppFront from '@/assets/projects/pintu_app_1.png'
import pintuAppBack from '@/assets/projects/pintu_app_2.png'
import spotifyFront from '@/assets/projects/spotify_1.png'
import spotifyBack from '@/assets/projects/spotify_2.png'
import mlFront from '@/assets/projects/ml_1.png'
import mlBack from '@/assets/projects/ml_2.png'
import intellihubFront from '@/assets/projects/intellihub_1.png'
import intellihubBack from '@/assets/projects/intellihub_2.png'
import intellihubWidget from '@/assets/projects/intellihub/widget.png'
import intellihubScrape from '@/assets/projects/intellihub/scrape.png'

// Import markdown content as raw strings
import intellihubContent from '@/data/markdown/intellihub-ai.md?raw'
import pintuAppContent from '@/data/markdown/pintu-app.md?raw'
import jamstreamContent from '@/data/markdown/jamstream.md?raw'
import spotifyHitPredictorContent from '@/data/markdown/spotify-hit-predictor.md?raw'

export type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  image: { src1: string; src2: string; alt: string }
  // extra screenshots shown under the write-up
  shots?: { src: string; caption: string }[]
  deploymentUrl?: string
  githubUrl?: string
  figmaUrl?: string
  bgClass: string
  content: string
}

export const projects: Project[] = [
  {
    id: 'intellihub-ai',
    title: 'intellihub.ai',
    description: 'turn your docs into a chatbot that actually knows your stuff',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Prompt Engineering'],
    image: {
      src1: intellihubFront,
      src2: intellihubBack,
      alt: 'intellihub.ai',
    },
    shots: [
      { src: intellihubWidget, caption: 'the chat widget, living on someone’s site' },
      { src: intellihubScrape, caption: 'feeding it a website' },
    ],
    bgClass: 'bg-intellihub',
    content: intellihubContent,
  },
  {
    id: 'pintu-app',
    title: 'PINTU App',
    description: 'events, payments & voting for indonesian students in singapore, in one app',
    techStack: ['React', 'TypeScript', 'Sass', 'Figma', 'Adobe Illustrator'],
    image: {
      src1: pintuAppBack,
      src2: pintuAppFront,
      alt: 'PINTU App',
    },
    deploymentUrl: 'https://app.pintusingapura.org',
    figmaUrl: 'https://bit.ly/pintu-app-figma',
    bgClass: 'bg-pintu',
    content: pintuAppContent,
  },
  {
    id: 'jamstream',
    title: 'JamStream',
    description: 'listen to the same song, at the same second, with your friends (plus chat)',
    techStack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Spotify API', 'Firebase'],
    image: {
      src1: spotifyBack,
      src2: spotifyFront,
      alt: 'JamStream App',
    },
    githubUrl: 'https://github.com/aftanza/DIP-Group-4',
    figmaUrl:
      'https://www.figma.com/design/gMIQ6WEVMcx6wvEDuRvBZ2/app-features-rough-draft?node-id=71-3474&t=aEqdiWd3V13V9GxV-1',
    bgClass: 'bg-jamstream',
    content: jamstreamContent,
  },
  {
    id: 'spotify-hit-predictor',
    title: 'Spotify Songs: HIT or FLOP?',
    description: 'can a computer tell a hit song from a flop? kind of!',
    techStack: [
      'Python',
      'Machine Learning',
      'Random Forest',
      'XGBoost',
      'Naive Bayes',
      'Decision Tree',
      'Logistic Regression',
    ],
    image: {
      src1: mlBack,
      src2: mlFront,
      alt: 'Spotify Songs: HIT or FLOP?',
    },
    githubUrl:
      'https://github.com/gabriellenicole/spotify-hitlist/blob/main/IE0005_MiniProject_SpotifyHitPredictor.ipynb',
    bgClass: 'bg-spotify',
    content: spotifyHitPredictorContent,
  },
]
