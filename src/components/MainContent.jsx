import React from 'react'
import SearchBar from './SearchBar'

const MainContent = () => {
  return (
    <div className='w-full'>
        <div className='w-full py-8 mb-5' > 
            <SearchBar className=""/>
        </div>
        <div style={{borderBottom: '1px solid #34333B'}} className='pb-4 mb-10'>

        </div>
      
    </div>
  )
}

export default MainContent