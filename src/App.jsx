import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './pages/Dashboard'
import Live from './pages/Live'
import Schedule from './pages/Schedule'
import Media from './pages/Media'
import Multistream from './pages/Multistream'
import Settings from './pages/Settings'
import Subscription from './pages/Subscription'
import Features from './pages/Features'

function App() {
  

  return (
    <Router>
     <Routes>
       <Route path="/" element={<Layout />}>
          {/* Define nested routes here */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="live" element={<Live />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="media" element={<Media />} />
          <Route path="multistream" element={<Multistream />} />
          <Route path="settings" element={<Settings />} />
          <Route path="subscription" element={<Subscription/>}/>
          <Route path="feature" element={<Features/>}/>
        </Route>
     </Routes>
    
    </Router>
  )
}

export default App
