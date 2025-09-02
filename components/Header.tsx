import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleDark } from '../store/slices/preferencesSlice'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { data: session } = useSession()
  const [q, setQ] = useState('')
  const onChange = (v:string) => {
    setQ(v)
    debouncedNavigate(v)
  }
  const debouncedNavigate = debounce((v:string) => {
    router.push(`/?q=${encodeURIComponent(v)}`, undefined, { shallow: true })
  }, 500)

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900">
      <div className="flex items-center gap-4">
        <button onClick={() => dispatch(toggleDark())} className="px-3 py-1 border rounded">Toggle</button>
        <input value={q} onChange={(e)=>onChange(e.target.value)} placeholder="Search..." className="px-3 py-2 rounded border"/>
      </div>
      <div className="flex items-center gap-3">
        {session ? (
          <>
            <span>Signed in as <strong>{session.user?.name}</strong></span>
            <button onClick={()=>signOut()} className="px-3 py-1 border rounded">Sign out</button>
          </>
        ) : (
          <button onClick={()=>signIn()} className="px-3 py-1 border rounded">Sign in</button>
        )}
      </div>
    </header>
  )
}
export default Header
