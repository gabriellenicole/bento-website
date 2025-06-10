import deepDive from './deep-dive-into-llm.md?raw'
import tuesdayWithMorrie from './tuesday-with-morrie.md?raw'
import allTheBrightPlaces from './all-the-bright-places.md?raw'

export type BlogPost = {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'deep-dive-into-llm',
    title: 'Deep Dive into LLMs',
    date: '2025-05-10',
    author: 'Gabrielle Nicole',
    summary: 'what I learned from Andrej Karpathy',
    content: deepDive,
  },
  {
    slug: 'tuesday-with-morrie',
    title: 'Tuesday with Morrie',
    date: '2024-01-24',
    author: 'Gabrielle Nicole',
    summary: 'life lessons i need to go back to from time to time',
    content: tuesdayWithMorrie,
  },
  {
    slug: 'all-the-bright-places',
    title: 'All the Bright Places',
    date: '2023-11-15',
    author: 'Gabrielle Nicole',
    summary: 'a story about love, loss, and finding light in dark times',
    content: allTheBrightPlaces,
  },
]
