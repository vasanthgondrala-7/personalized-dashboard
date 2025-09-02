import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/slices/preferencesSlice'
import { RootState } from '../store'
import { motion } from 'framer-motion'

const Card: React.FC<{item:any}> = ({item}) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.preferences?.favorites ?? [])
  const isFav = favorites.includes(item.id)
  return (
    <motion.article role="article" aria-label={`card-${item.id}`} layout whileHover={{ scale: 1.01 }} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <div className="flex gap-4">
        {item.image && <img src={item.image} alt={item.title || 'image'} className="w-24 h-24 object-cover rounded" />}
        <div className="flex-1">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm mt-1">{item.description}</p>
          <div className="mt-2 flex gap-2">
            <button aria-label={`read-${item.id}`} className="px-3 py-1 border rounded">Read More</button>
            <button aria-pressed={isFav} aria-label={`fav-${item.id}`} onClick={()=> dispatch(isFav ? removeFavorite(item.id) : addFavorite(item.id))} className="px-3 py-1 border rounded">
              {isFav ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
export default Card
