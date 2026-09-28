**tl;dr** feed it your docs, get a chatbot that actually knows your stuff, paste it on your website. done.

## the idea

nobody wants to dig through 40 pages of documentation for one answer. intellihub lets a team turn their docs, websites and FAQs into a little AI assistant that answers for them.

## how it works (the short version)

1. make a workspace and invite your team
2. make a chatbot and give it your colors
3. feed it: scrape a website, upload PDFs, or write your own Q&A pairs
4. chat with it and fix what it gets wrong
5. embed it on your site

behind the scenes, everything you feed it gets chopped into small chunks and turned into embeddings (numbers that capture what the text _means_). when someone asks a question, it finds the chunks that mean the same thing, even if they're worded differently, and hands them to the AI to answer.

## built with

next.js + react on the front, supabase (postgres, vector storage, auth) on the back, openai for the brains.

## what i'd add next

analytics, more languages, and more places to pull knowledge from.
