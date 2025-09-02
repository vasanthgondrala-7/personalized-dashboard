import type { NextApiRequest, NextApiResponse } from 'next'
const sample = {
  posts: Array.from({length:5}).map((_,i)=>({
    id: i+200,
    user: 'user'+(i+1),
    text: 'This is a sample social post number '+(i+1),
    image: 'https://picsum.photos/seed/social'+(i+1)+'/300/200'
  }))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sample)
}
