import React, { useState } from 'react'
import { BsFolderPlus } from 'react-icons/bs'
import { FaRegFolder } from 'react-icons/fa'
import { FiUpload } from 'react-icons/fi'

import PlayListCardForMedia from '../components/PlayListCardForMedia'


const Media = () => {

  const[activeTab,setActiveTab] = useState("All Folders")

  const items = [
    { id: 1, name: "All Folders", icon: <FaRegFolder /> },
    { id: 2, name: "Videos", icon: <FaRegFolder /> },
    { id: 3, name: "Tutorials", icon: <FaRegFolder /> },
  ]



  return (
    <div className='flex gap-7 mt-7 p-8'>

      
      <div className='rounded-t-lg h-[100px]' style={{ border: "1px solid #34333B" }}>
        {items.map((item) => (
          <div className={`flex gap-2 items-center px-12 py-1 ${activeTab === item.name ? "bg-[#8D42EA] text-white" : ""}`} style={{ borderBottom: "1px solid #34333B" }} key={item.id} onClick={()=>setActiveTab(item.name)}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className='w-[800px] h-auto  rounded-r-lg' style={{ border: "1px solid #34333B" }}>
        <div className='flex gap-3 px-7 py-2 justify-end'>
          <BsFolderPlus className='text-md' />
          <FiUpload className='text-md' />
        </div>
        <div className='flex gap-2 items-center px-5 py-1' style={{ borderBottom: "1px solid #34333B" }}>
          <FaRegFolder />
          <span>Videos</span>
        </div>
        <div className='flex gap-2 items-center px-5 py-1 bg-[#1D1C1F]' style={{ borderBottom: "1px solid #34333B" }}>
          <FaRegFolder />
          <span>Videos</span>
        </div>
        <div className='flex gap-2 items-center px-5 py-1' style={{ borderBottom: "1px solid #34333B" }}>
          <FaRegFolder />
          <span>Videos</span>
        </div>
       
        {Array.from({ length: 15 }).map((_, index) => {
          const backgroundColor = index % 2 === 0 ? '' : '#1C1C1D';
          return <PlayListCardForMedia key={index} backgroundColor={backgroundColor} />
        })}
        
      </div>
    </div>
  )
}

export default Media