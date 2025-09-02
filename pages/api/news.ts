import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const sample = {
  articles: Array.from({length:10}).map((_,i)=>({
    id: i+1,
    title: 'News headline ' + (i+1),
    summary: 'This is a short summary for news article ' + (i+1),
    image: 'https://picsum.photos/seed/news'+(i+1)+'/200/200'
  }))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = process.env.NEWSAPI_KEY
  const cats = String(req.query.cats || 'general')
  const page = Number(req.query.page || 1)
  if (key) {
    // Example: call NewsAPI.org (note: you must add NEWSAPI_KEY to .env.local)
    const q = encodeURIComponent(cats)
    const url = `https://newsapi.org/v2/top-headlines?category=${q}&page=${page}&pageSize=10&apiKey=${key}`
    try {
      const r = await fetch(url)
      const data = await r.json()
      // normalize to our expected shape
      const articles = (data.articles || []).map((a:any, idx:number) => ({
        id: (page-1)*10 + idx + 1,
        title: a.title || 'No title',
        summary: a.description || a.content || '',
        image: a.urlToImage || null
      }))
      return res.status(200).json({ articles })
    } catch (e) {
      console.error(e)
      return res.status(200).json(sample)
    }
  }
  // fallback to mock data
  res.status(200).json(sample)
}
