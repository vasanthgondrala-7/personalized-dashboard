import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  })
  let id = 0
  const iv = setInterval(()=> {
    id++
    const data = JSON.stringify({ id, text: 'Realtime update #' + id, time: new Date().toISOString() })
    res.write(`id: ${id}\n`)
    res.write(`data: ${data}\n\n`)
    if (id >= 20) {
      clearInterval(iv)
      res.end()
    }
  }, 3000)

  req.on('close', () => {
    clearInterval(iv)
    res.end()
  })
}
