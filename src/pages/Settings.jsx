import React, { useState } from 'react'
import { FiEdit3 } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";


const Appearance = [
  {id: 1, name: "Light Theme", icon: <IoMdCheckmark  />},
  {id: 2, name: "Dark Theme", icon: <IoMdCheckmark />}
 ]

 const Playlists = [
  {id:1,name:"Audio Only"},
  {id:2,name:"Video Only"},
  {id:3,name:"Both"},
 ]

const Settings = () => {
 const [checked,setChecked] = useState(null)
 const [playlistChecked, setPlaylistChecked] = useState(null);


 const toggleCheckbox = (id) => {
    setChecked(id);
 }

 const togglePlaylistCheckbox = (id) => {
    setPlaylistChecked(id);
 }

 

  return (
    <div className='p-10'>
      <div className='px-6 py-10' style={{ border: "1px solid #34333B" }}>
        <h2 className='text-[16px] font-bold w-full h-full'>Profile</h2>
        <div className='flex gap-5 py-5 '>
          <div className='relative cursor-pointer'>
            <img className='w-[45px] h-[45px] rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60" alt="" />
            <FiEdit3 className='absolute bottom-0 right-0 bg-white text-[#8D42EA] rounded-full w-[20px] h-[20px] p-1' />
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-[16px]'>Your name</span>
            <span className='text-[14px]'>yourname@gmail.com</span>
          </div>
        </div>
        <div className='flex items-center justify-between w-[50%] '>
          <div className='flex flex-col gap-3 py-5'>
            <span>Name</span>
            <span>EmailAddress</span>
            <span>Location</span>
          </div>
          <div className='flex flex-col gap-3 py-5'>
            <div className='flex items-center gap-[100px] '>
              <span>Musa Ahmed</span>
              <FiEdit3 className='text-[#8D42EA] ml-10 cursor-pointer '/>
            </div>
            <span>musaahmed@example.com</span>
            <span>Nigeria</span>
          </div>
        </div>
        <div className='py-5'>
          <h2 className='text-md font-bold'>Appearance</h2>
          <div className='flex flex-col gap-3 py-5'>
            {Appearance.map((item)=>(
              <label key={item.id} className="inline-flex relative items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={checked === item.id}
              onChange={() => toggleCheckbox(item.id)}
              className='appearance-none w-[16px] h-[16px] bg-[#5B5563] rounded-sm'
            />
            <IoMdCheckmark className={`absolute top-1 ${checked === item.id ? "opacity-100" : "opacity-0"} `} />
            <span className="text-[#cfcfcf]">{item.name}</span>
          </label>
            ))   }
          </div>
         
        </div>
        <div className='py-5'>
          <h2 className='text-md font-bold'>Playlist</h2>
          <div className='flex flex-col gap-3 py-5'>
            {Playlists.map((item)=>(
              <label key={item.id} className="inline-flex relative items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={playlistChecked === item.id}
              onChange={() => togglePlaylistCheckbox(item.id)}
              className='appearance-none w-[16px] h-[16px] bg-[#5B5563] rounded-sm'
            />
            <IoMdCheckmark className={`absolute top-1 ${playlistChecked === item.id ? "opacity-100" : "opacity-0"} `} />
            <span className="text-[#cfcfcf]">{item.name}</span>
          </label>
            ))   }
          </div>
         
        </div>
        <div className='flex justify-end gap-3 pr-5 mb-3'>
                  <button className='px-3 py-2 rounded-md text-[#8D42EA] w-[150px]' style={{ border: "1px solid #8D42EA " }}>Cancel</button>
                  <button className='bg-[#8D42EA] px-5 py-2 rounded-md  w-[150px]'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Settings