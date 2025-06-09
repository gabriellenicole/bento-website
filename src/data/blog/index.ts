import helloWorldContent from './hello-world.md?raw'
import helloWorld2Content from './second-post.md?raw'
import helloWorld3Content from './third-post.md?raw'


export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2024-07-01',
    author: 'Gabrielle Nicole',
    summary: 'Welcome to my new blog! This is the very first post.',
    content: helloWorldContent,
  },
  {
    slug: 'hello-world-2',
    title: 'Hello World 2',
    date: '2024-07-02',
    author: 'Gabrielle Nicole',
    summary: 'Welcome to my new blog! This is the very first post.',
    content: helloWorld2Content,
  },
  {
    slug: 'hello-world-3',
    title: 'Hello World 3',
    date: '2024-07-03',
    author: 'Gabrielle Nicole',
    summary: 'Welcome to my new blog! This is the very first post.',
    content: helloWorld3Content,
  },
]