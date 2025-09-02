import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Layout: React.FC<{children:any}> = ({children}) => {
  const dark = useSelector((state: RootState) => state.preferences.darkMode)
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  )
}
export default Layout
