// everything that makes the homepage "gaby" lives here, so it's easy to edit.
import cafe from '@/assets/cafe.png'
import sunset from '@/assets/sunset.png'

// the polaroid stack in the hero. add/remove as many as you like.
// to use a new photo: drop it in src/assets, import it above, and add it here
// (or paste an ImageKit url as `src` instead of importing).
// photos on imagekit: pass the file name exactly as uploaded. `f-auto` lets imagekit
// convert HEIC (iphone) photos into something every browser can show.
export const ik = (file: string, width = 900) =>
  `https://ik.imagekit.io/gabriellenicole/${file}?tr=w-${width},f-auto`

export const heroPhotos: { src: string; caption: string }[] = [
  { src: ik('IMG_7660.JPG', 700), caption: 'hi, it’s me!' },
  { src: ik('IMG_8208.JPG', 700), caption: 'me, with a birdie' },
]

export type Track = {
  id: string
  name: string
  artists: string
  note?: string
}

// shown when the live spotify feed isn't available (local dev, or before the
// SPOTIFY_* env vars are set on vercel). swap these any time.
export const fallbackTracks: Track[] = [
  { id: '7DMPq3XndRJaj6NTINsLOz', name: 'Let Me Know', artists: 'LANY' },
  { id: '0aYb7QVn9MGxSsYbcTwVUs', name: 'anything 4 u', artists: 'LANY' },
  { id: '56k68P3bFQvnKw89hizJFZ', name: 'Paint By Numbers', artists: 'Harry Styles' },
  {
    id: '1Ehdm1PDlKrdfyBsjwEvd1',
    name: 'Top Of The World',
    artists: 'Carpenters',
    note: 'an oldie',
  },
  {
    id: '3Rc2ajBMInxeNGVkMPC92Y',
    name: 'Dancing On My Own',
    artists: 'Robyn',
    note: 'kitchen dance song',
  },
]

export const tickerWords = [
  'people person',
  'homemade coffee',
  'vlog editor',
  'romcom rewatcher',
  'LANY on repeat',
  'aprendiendo español',
  'blue stripes, always',
  'kitchen dancer',
]

export type Milk = {
  id: string
  name: string
  color: string
  foam: string
  verdict: string
}

export const milks: Milk[] = [
  {
    id: 'whole',
    name: 'whole milk',
    color: '#B98A62',
    foam: '#F4E9DA',
    verdict: 'the classic. a tuesday coffee.',
  },
  {
    id: 'oat',
    name: 'oat',
    color: '#A87C57',
    foam: '#EFE2CC',
    verdict: 'creamy, cozy, very "i have my life together".',
  },
  {
    id: 'almond',
    name: 'almond',
    color: '#9C7556',
    foam: '#EDE4D8',
    verdict: 'lighter. for when i already had two.',
  },
  {
    id: 'soy',
    name: 'soy',
    color: '#A68463',
    foam: '#F1E8DA',
    verdict: 'nostalgic. tastes like home.',
  },
]

export const spanishPhrases = [
  { es: 'hola, ¿cómo estás?', en: 'hi, how are you?' },
  { es: 'me encanta el café', en: 'i love coffee' },
  { es: 'el azul es mi color favorito', en: 'blue is my favorite color' },
  { es: 'quiero conocerte', en: 'i want to get to know you' },
  { es: 'la vida es bonita', en: 'life is pretty' },
  { es: 'un poquito nada más', en: 'just a little bit' },
]

export type Watch = {
  title: string
  tag: string
  line: string
  genre: 'romcom' | 'thriller'
}

export const watchlist: Watch[] = [
  { title: 'Nobody Wants This', tag: 'series', line: 'noah & joanne, forever', genre: 'romcom' },
  { title: 'One Day', tag: 'rewatch', line: 'bring tissues', genre: 'romcom' },
  {
    title: 'How to Lose a Guy in 10 Days',
    tag: '2003',
    line: 'the “you’re so vain” scene',
    genre: 'romcom',
  },
  {
    title: 'anything Harlan Coben',
    tag: 'thriller',
    line: 'detective brain: on',
    genre: 'thriller',
  },
  { title: 'Speak No Evil', tag: 'thriller', line: 'yelled at the screen', genre: 'thriller' },
]

// conversation cards. the thing i actually love: how people think.
export const questions = [
  'what’s a small thing that made you happy this week?',
  'who were you at 15, and would they like you now?',
  'what song takes you straight back to a specific place?',
  'what’s something you changed your mind about recently?',
  'what’s a habit you picked up from someone you love?',
  'what’s your comfort movie and why that one?',
  'what did you need to hear a year ago?',
]

export type QuizQuestion = {
  q: string
  options: [string, string]
  gaby: 0 | 1
}

export const friendQuiz: QuizQuestion[] = [
  { q: 'morning ritual?', options: ['homemade coffee', 'straight out the door'], gaby: 0 },
  {
    q: 'movie night pick?',
    options: ['a romcom i’ve seen 6 times', 'something new & scary'],
    gaby: 0,
  },
  { q: 'first hangout?', options: ['deep talk over coffee', 'loud party'], gaby: 0 },
  { q: 'road trip aux?', options: ['LANY + oldies', 'whatever’s trending'], gaby: 0 },
  { q: 'your closet?', options: ['a rainbow', 'black, white, blue, jeans'], gaby: 1 },
]

export const wardrobe = [
  { name: 'black', className: 'bg-ink' },
  { name: 'white', className: 'bg-paper border border-ink/15' },
  { name: 'blue', className: 'bg-sky-soft' },
  { name: 'jeans', className: 'bg-denim' },
  { name: 'the pants', className: 'stripes-bold' },
]

export const socials = {
  instagram: 'https://www.instagram.com/gabriellenicoles/',
  telegram: 'https://t.me/gabriellenicole',
  email: 'mailto:gabrielle.nicole03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabrielle-nicole/',
  github: 'https://github.com/gabriellenicole',
  spotify: 'https://open.spotify.com/user/gabriellenicole03',
}

const imagekit = [
  'C7ACB940-CD14-4087-B677-7D4324628526_1_105_c.jpeg?updatedAt=1728390696453',
  '3905A695-58EE-4A55-A558-F5F4B17212D9_1_105_c.jpeg?updatedAt=1728391608977',
  '3EA8424F-1802-49DC-8A88-E54E987878B2_1_105_c.jpeg?updatedAt=1728390891081',
  '90171E0E-9779-4314-A736-3280421E3F55_1_105_c.jpeg?updatedAt=1728391595048',
  'CE70C714-97F0-4028-88E1-46BFE789C650_1_105_c.jpeg?updatedAt=1728391307061',
  '2C2F0CC6-6B33-4ED1-89ED-B9DD20DD1A3E_1_105_c.jpeg?updatedAt=1728391580328',
  '94C8D31B-B3BF-45DA-B110-16A55CFD012C_1_105_c.jpeg?updatedAt=1728391124054',
  'E66F3657-DC85-4E14-A8BF-C130A4798D62_1_105_c.jpeg?updatedAt=1728391715834',
  '079C0B50-F868-462C-8D19-939D9060A0CD_1_105_c.jpeg?updatedAt=1728390696317',
  'BC35E9B5-97B1-44BF-8613-91F04DBC4872_1_105_c.jpeg?updatedAt=1728390721533',
  '75A4D5D5-ED4E-41C0-A9AA-E1500FA37BB3_1_105_c.jpeg?updatedAt=1728391390270',
  'F474697B-D380-41DA-BA42-1976F6EC7AED_1_105_c.jpeg?updatedAt=1728390891485',
].map((p) => `https://ik.imagekit.io/gabriellenicole/${p}`)

// the newest batch
const newPhotos = [
  'NLS_1362.JPEG',
  'IMG_4904.HEIC',
  'IMG_0888.JPG',
  'IMG_4577.JPG',
  'IMG_1745.heic',
  'IMG_4970.JPG',
  'IMG_3686.JPG',
  'IMG_3818.JPG',
  'IMG_3702.JPG',
  'IMG_1477.JPG',
  'IMG_0879.JPG',
  'IMG_0454.JPG',
  'IMG_3362.JPG',
].map((f) => ik(f, 600))

export const galleryPhotos: string[] = [
  ...newPhotos,
  ...imagekit.slice(0, 3),
  cafe,
  ...imagekit.slice(3, 7),
  sunset,
  ...imagekit.slice(7),
]

// shown next to the blog, on the homepage and on /blog
export const writingNote =
  'i just think it’s cool to document thoughts. full honesty: AI helps with all of it. i’m the world’s worst writer, sadly.'
