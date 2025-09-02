import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories, toggleDark } from '../store/slices/preferencesSlice'
import { RootState } from '../store'

export default function Settings() {
  const dispatch = useDispatch()
  const prefs = useSelector((s:RootState)=>s.preferences)
  const [cats, setCats] = useState<string[]>(prefs.categories)

  const toggleCat = (c:string) => {
    setCats(prev => prev.includes(c) ? prev.filter(x=>x!==c) : [...prev, c])
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Settings</h1>
      <div className="mb-4">
        <h3 className="font-semibold">Categories</h3>
        <div className="flex gap-2 mt-2">
          {['technology','sports','finance','general'].map(c=>(
            <button key={c} onClick={()=>toggleCat(c)} className={`px-3 py-1 border rounded ${cats.includes(c)?'bg-blue-500 text-white':''}`}>{c}</button>
          ))}
        </div>
        <div className="mt-2">
          <button onClick={()=>dispatch(setCategories(cats))} className="px-3 py-1 border rounded">Save</button>
          <button onClick={()=>dispatch(toggleDark())} className="ml-2 px-3 py-1 border rounded">Toggle Dark</button>
        </div>
      </div>
    </div>
  )
}
