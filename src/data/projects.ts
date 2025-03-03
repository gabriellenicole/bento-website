import pintuAppFront from '@/assets/projects/pintu_app_1.png'
import pintuAppBack from '@/assets/projects/pintu_app_2.png'
import spotifyFront from '@/assets/projects/spotify_1.png'
import spotifyBack from '@/assets/projects/spotify_2.png'
import mlFront from '@/assets/projects/ml_1.png'
import mlBack from '@/assets/projects/ml_2.png'
import intellihubFront from '@/assets/projects/intellihub_1.png'
import intellihubBack from '@/assets/projects/intellihub_2.png'

// Import markdown content as raw strings
import intellihubContent from '@/data/markdown/intellihub-ai.md?raw'
import pintuAppContent from '@/data/markdown/pintu-app.md?raw'
import jamstreamContent from '@/data/markdown/jamstream.md?raw'
import spotifyHitPredictorContent from '@/data/markdown/spotify-hit-predictor.md?raw'

export const projects = [
  {
    id: 'intellihub-ai',
    title: 'intellihub.ai',
    description: 'A scalable AI-powered chatbot widget deployment',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Prompt Engineering'],
    image: {
      src1: intellihubFront,
      src2: intellihubBack,
      alt: 'PINTU App',
    },
    bgClass: 'bg-intellihub',
    content: intellihubContent,
  },
  {
    id: 'pintu-app',
    title: 'PINTU App',
    description:
      'A web application to support day-to-day events for an Indonesians Association in Singapore',
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
    description:
      'A Spotify clone with group session feature, where users can create rooms, listen to music together, and chat in real-time',
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
    content: spotifyHitPredictorContent,
  },
]
