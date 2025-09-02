import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Card from '../components/Card'

export default function Favorites() {
  const favs = useSelector((s: RootState) => s.preferences?.favorites ?? [])
  const items = useSelector((s: RootState) => s.feed?.items ?? [])
  const favItems = items.filter(i=> favs.includes(i.id))
  return (
    <div>
      <h1 className="text-2xl mb-4">Favorites</h1>
      {favItems.length === 0 ? <p>No favorites yet.</p> : favItems.map(it=> <Card key={it.id} item={it} />)}
    </div>
  )
}
