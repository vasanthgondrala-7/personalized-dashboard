import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFeed, appendFeed, reorderFeed } from '../store/slices/feedSlice'
import { RootState } from '../store'
import Card from '../components/Card'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { useRouter } from 'next/router'

const fetcher = (url: string) => axios.get(url).then(r => r.data)

export default function Home() {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.feed.items)
  const categories = useSelector((state: RootState) => state.preferences?.categories ?? [])
  const router = useRouter()
  const q = (typeof router.query.q === 'string') ? router.query.q : ''

  // initial load
  useEffect(() => {
    const load = async () => {
      const [news, recs, social] = await Promise.all([
        fetcher('/api/news?cats=' + categories.join(',')),
        fetcher('/api/recommendations'),
        fetcher('/api/social')
      ])
      const normalized = [
        ...news.articles.map((a: any) => ({
          id: 'n-' + a.id,
          type: 'news',
          title: a.title,
          description: a.summary,
          image: a.image
        })),
        ...recs.results.map((m: any) => ({
          id: 'm-' + m.id,
          type: 'movie',
          title: m.title,
          description: m.overview,
          image: m.poster
        })),
        ...social.posts.map((p: any) => ({
          id: 's-' + p.id,
          type: 'social',
          title: p.user,
          description: p.text,
          image: p.image
        }))
      ]
      dispatch(setFeed(normalized))
    }
    load()
  }, [dispatch, categories])

  // SSE subscription for realtime updates (run once)
  useEffect(() => {
    const evtSource = new EventSource('/api/realtime')
    evtSource.onmessage = (e) => {
      try {
        const d = JSON.parse(e.data)
        const newItem = {
          id: 'r-' + d.id,
          type: 'social',
          title: 'Realtime',
          description: d.text
        }
        // Only append the new item
        dispatch(appendFeed([newItem]))
      } catch (err) {
        console.error(err)
      }
    }
    return () => {
      evtSource.close()
    }
  }, [dispatch])

  // load more
  const [page, setPage] = useState(1)
  const loadMore = async () => {
    const res = await fetcher('/api/news?page=' + (page + 1))
    const more = res.articles.map((a: any) => ({
      id: 'n-' + a.id,
      type: 'news',
      title: a.title,
      description: a.summary
    }))
    dispatch(appendFeed(more))
    setPage(p => p + 1)
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const newItems = Array.from(items)
    const [moved] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, moved)
    dispatch(reorderFeed(newItems))
  }

  const filtered = items.filter(i =>
    !q ||
    i.title.toLowerCase().includes(String(q).toLowerCase()) ||
    i.description.toLowerCase().includes(String(q).toLowerCase())
  )

  return (
    <div>
      <h1 className="text-2xl mb-4">Personalized Feed</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="feed">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="grid grid-cols-1 gap-4">
              {filtered.map((it, idx) => (
                <Draggable key={it.id} draggableId={it.id} index={idx}>
                  {(prov) => (
                    <div ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps}>
                      <Card item={it} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="mt-4">
        <button onClick={loadMore} className="px-4 py-2 rounded border">Load more</button>
      </div>
    </div>
  )
}

