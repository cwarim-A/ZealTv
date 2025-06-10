import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { FaRegSquare } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { PiDotsThreeVertical } from "react-icons/pi";

import { MdLoop } from "react-icons/md";
import PlaylistComponent from '../components/PlaylistComponent';


const Live = () => {
  const currentTime = 8.33;
  const duration = 14.12;
  const progress = (currentTime / duration) * 100;

  const Icons = [
    {
      icon: <CiPlay1 size={23} />,
      title: "Play",
      color: "text-[#8D42EA]"
    },
    {
      icon: <FaRegSquare size={23} />,
      title: "Stop",
      color: "text-[#FF0000]"
    },
    {
      icon: <RiResetLeftLine size={23} />,
      title: "Reset",
      color: "text-[#FF6A00]"
    },
    {
      icon: <MdLoop size={23} />,
      title: "loop",
      color: "text-[#00FF2F]"
    }
  ]




  return (
    <div className='p-10 '>
      <div className='flex items-center justify-between'>
        <button className='flex items-center justify-center gap-2 text-red-600 text-[18px] border border-red-600 rounded-md px-3 py-2'>
          Live
          <span className='h-[5px] w-[5px] rounded-full bg-red-600'></span>
        </button>
        <div className='bg-white text-black p-2 text-lg font-bold rounded-md'>
          <select name='Church 1'>
            <option value='Church 1'>Church 1</option>
          </select>
        </div>
      </div>
      <div className='flex gap-10 '>
        <div className='flex flex-col gap-5 '>
          <div className='w-[250px] h-[260px] px-6 py-0 mt-7 rounded-md ' style={{ border: "1px solid #34333B" }}>
            <h3 className='text-xl font-semibold mb-3 mt-3' >Now playing</h3>
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
            <p className="text-md text-center  mt-3">Staff Interview Video.mp4</p>
            <p className='text-[12px] mt-3'>Sat.25 May,2025(12:00pm-2:30pm)</p>
          </div>
          <div className='w-[250px] h-[200px] py-6 px-4 mt-3 rounded-md' style={{ border: "1px solid #34333B" }}>
            <h3 className='text-xl font-semibold mb-3' >Timer</h3>
            <div className='flex  items-center justify-center gap-2 '>
                <h3 className='text-2xl  mt-5'>00:00:10  </h3>
                 <div className="h-10 border-l border-[#34333B] mt-5"></div>
                <h3 className='text-2xl  mt-5'>  00:00:10 </h3>
            </div>
            
            {/* <p className='text-[11px] mt-5'> Duration:00:14:12  | In:00:08:33| Out:00:05:79 </p> */}
            <div className='flex gap-1 text-[10px]'>
              <span className=' mt-5'> Duration:00:14:12 </span>
              <div  style={{borderRight:"1px solid #34333B",marginTop:"20px"}}></div>
              <span className=' mt-5'> In:00:08:33 </span>
              <div  style={{borderRight:"1px solid #34333B",marginTop:"20px"}}></div>
              <span className=' mt-5'> Out:00:05:79 </span>
            </div>
          </div>
          <div className='w-[250px] h-[150px] p-6 mt-3 rounded-md' style={{ border: "1px solid #34333B" }}>
            <h3 className='text-2xl font-semibold mb-3' >Manual Controls</h3>
            <div className='flex items-center justify-between mt-7'>
              {Icons.map((icon, index) => (
                <div key={index} className='flex flex-col items-center gap-2 p-2 rounded-md' style={{ border: "1px solid #34333B" }}>
                  <button className={`text-3xl ${icon.color}`}>
                    {icon.icon}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[250px] h-[270px] p-6 mt-3 rounded-md' style={{ border: "1px solid #34333B" }}>
            <h3 className='text-2xl font-semibold mb-3' >Upcoming</h3>
            <p className='text-[12px] mt-5'>Sat.25 May,2025(2:30pm-5:30pm)</p>
            <img
              src="https://images.unsplash.com/photo-1527772291563-41d27d5052ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your video thumbnail
              alt="Now playing"
              className="w-[220px] h-auto object-cover mt-3 rounded-md"
            />
          </div>
        </div>
        <div>
          <div className='relative w-full h-[750px] overflow-hidden overflow-y-scroll  px-6 mt-7 rounded-md scrollbar short-scrollbar   ' style={{ border: "1px solid #34333B" }}>
            <div className='flex items-center justify-between'>
              <h3 className='text-2xl font-semibold mb-3 mt-3' >Playlist</h3>
              <PiDotsThreeVertical className='text-2xl' />
            </div>
            <PlaylistComponent isActive={true} />
            <PlaylistComponent />
            <PlaylistComponent />
            <PlaylistComponent />
            <PlaylistComponent />
          </div>
          <div className='sticky w-full h-[230px] p-7   backdrop-blur-md z-10' style={{ border: "1px solid #34333B" }} >
            <h1 className='text-xl'>Overall Playback Progress</h1>
            <div className='w-[600px] h-[20px] bg-gray-600 rounded-lg mt-5 relative'>
              <div
                className="absolute h-[20px] bg-purple-500 rounded-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className='flex items-center justify-between  w-full mt-5 font-bold'>
              <span className='text-[19px]'>{currentTime.toFixed(2)}</span>
              <span className='text-[19px]' >{duration.toFixed(2)}</span>
            </div>
            <div className='flex items-center justify-between gap-10 w-full  py-2  mt-5 rounded-lg'  >
              <p className='text-[19px] '>Sat.25 May,2025(12:00pm)</p>
              <p className='text-[19px] '>24Hours</p>
              <p className='text-[19px] '>Sat.25 May,2025(2:30pm)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Live