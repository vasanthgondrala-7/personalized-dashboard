import React from 'react'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r p-4">
      <h2 className="text-xl font-bold mb-4">My Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/">Feed</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  )
}
export default Sidebar
