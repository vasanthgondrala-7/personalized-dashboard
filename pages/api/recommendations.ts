import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const sample = {
  results: Array.from({length:6}).map((_,i)=>({
    id: i+100,
    title: 'Movie Title '+(i+1),
    overview: 'Overview for movie '+(i+1),
    poster: 'https://picsum.photos/seed/movie'+(i+1)+'/200/300'
  }))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = process.env.TMDB_KEY
  if (key) {
    try {
      const r = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      const data = await r.json()
      const results = (data.results || []).slice(0,6).map((m:any)=>({
        id: m.id,
        title: m.title,
        overview: m.overview,
        poster: m.poster_path ? `https://image.tmdb.org/t/p/w300${m.poster_path}` : null
      }))
      return res.status(200).json({ results })
    } catch (e) {
      console.error(e)
      return res.status(200).json(sample)
    }
  }
  res.status(200).json(sample)
}
