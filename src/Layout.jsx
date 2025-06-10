import React from 'react'
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex h-auto w-screen">
      <Sidebar />
      <main className="flex-1">
        {/* Outlet is where the nested route component will render */}
        <SearchBar/>
        <div className='w-auto' style={{borderBottom:"1px solid #34333B"}}></div>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout