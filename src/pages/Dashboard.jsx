import React, { useState } from 'react'
import Box from '../components/Box'
import ChartComponent from '../components/ChartComponent'
import { useLocation } from 'react-router-dom'


const infos = [
  {
    id: 1,
    name: "Videos Uploaded",
    value: 1000
  },
  {
    id: 2,
    name: "No of Live Videos",
    value: 600
  },
  {
    id: 3,
    name: "Number of Multistream",
    value: 500
  },
  {
    id: 4,
    name: "Number of Schedule",
    value: 1000
  }
]

const Links = [
  {
    id: 1,
    href: "#",
    name: "All"
  },
  {
    id: 2,
    href: "#",
    name: "Channel 1"
  },
  {
    id: 3,
    href: "#",
    name: "Channel 2"
  },
  {
    id: 4,
    href: "#",
    name: "Channel 3"
  }
]




const Dashboard = () => {
  
  const [active,setActive] = useState(1)


  const currentTime = 8.33;
  const duration = 14.12;
  const progress = (currentTime / duration) * 100;


  return (
    <div>
      <div className='flex items-center justify-end px-10 mt-10'>
        <h2>12:04PM Sat, 25 May</h2>
      </div>
      <div className='p-8 mt-5 mx-10 rounded-md' style={{ border: "1px solid #34333B" }}>
        <h2 className='text-white text-2xl mb-4'>Key Numbers</h2>
        <div className='flex gap-4 w-full '>
          <Box name="Total Streams" number="10,200" rate="150" />
          <Box name="Views" number="8,650" rate="80" />
          <Box name="Subscribers" number="9,500" rate="60" />
          <Box name="Followers" number="12,700" rate="40" />
        </div>
      </div>
      <div className='p-10 mt-8 mx-10 rounded-md flex flex-col items-center gap-5 ' style={{ border: "1px solid #34333B" }}>
        <div className='flex items-center justify-between gap-10'>
          <div className='w-[300px] h-[330px] px-6  rounded-md ' style={{ border: "1px solid #34333B" }}>
            <h3 className='text-2xl font-semibold mb-3 mt-3' >Now playing</h3>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527772291563-41d27d5052ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your video thumbnail
                alt="Now playing"
                className="w-full h-auto object-cover"
              />

              {/* Progress Bar Overlay */}
              <div className="absolute bottom-0 left-0 w-full px-2 py-1 bg-gradient-to-t from-black/60 to-transparent text-sm flex justify-between items-center">
                <span>{currentTime.toFixed(2)}</span>

                <div className="relative w-full mx-2 h-1 bg-gray-600 rounded">
                  <div
                    className="absolute h-1 bg-purple-500 rounded"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span>{duration.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-lg text-center  mt-3">Staff Interview Video.mp4</p>
            <p className='text-[15px] mt-3'>Sat.25 May,2025(12:00pm-2:30pm)</p>
          </div>
          <ChartComponent />
        </div>
        <div className='w-full rounded-md p-5' style={{ border: "1px solid #34333B" }}>
          <div className='flex items-center gap-8 mb-5'>
            <h2 className='text-lg pl-4'>Channels</h2>
            {Links.map((link) => (
              <ul className='flex gap-5' key={link.id}>
                <li onClick={()=>setActive(link.id)} className={`${active === link.id ? "border-b-2 flex items-center justify-center   border-[#8D42EA] text-[#8D42EA]"  : ""}`}><button>{link.name}</button></li>
              </ul>
            ))}
          </div>
          <div className=' flex items-center justify-between'>
            {infos.map((info) => (
              <div className='bg-[#190D27] p-5 flex flex-col items-center justify-between'>
                <span>{info.name}</span>
                <h2 className='text-2xl font-bold mt-5'>{info.value}</h2>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard