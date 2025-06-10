import React, { useState } from 'react'
import { IoPlayOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { LiaTimesSolid } from 'react-icons/lia';


const Multistream = () => {
  

  const platforms = [
    {
      id: 1,
      name: 'YouTube',
      url: 'rtmp://a.rtmp.youtube.com/live',
      icon: '/Youtube-icon.png',
      connected: true,
    },
    {
      id: 2,
      name: 'Twitch',
      url: 'rtmp://a.rtmp.youtube.com/live',
      icon: '/Vector.png',
      connected: false,
    },
    {
      id: 3,
      name: 'Facebook',
      url: 'rtmp://a.rtmp.youtube.com/live',
      icon: '/Youtube-icon.png',
      connected: false,
    },
    {
      id: 4,
      name: 'LinkedIn',
      url: 'rtmp://a.rtmp.youtube.com/live',
      icon: '/Vector.png',
      connected: false,
    },
    {
      id: 5,
      name: 'TikTok',
      url: 'rtmp://a.rtmp.youtube.com/live',
      icon: '/Youtube-icon.png',
      connected: false,
    },
    {
      id: 6,
      name: 'Instagram',
      url: 'rtmp://a.rtmp.youtube.com/live',
      icon: '/Vector.png',
      connected: false,
    },
  ];

  const [toggles, setToggles] = useState(() =>
    platforms.reduce((acc, platform) => {
      
      acc[platform.id] = false;

      return acc;
    }, {})
  );

  const toggleSwitch = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };




  return (
    <div className='py-[30px] px-[60px] w-[90%] '>
      <div className=' p-[100px]' style={{ border: "1px solid #34333B" }}>
        <div className='flex justify-between items-center mb-[70px]'>
          <h2>Platforms</h2>
          <div className='flex gap-2 items-center text-[#8D42EA]'>
            <IoPlayOutline />
            <span>Watch Tutorial</span>
          </div>
        </div>

        {platforms.map((platform) => (
          <>
            <div className='flex justify-between items-center mt-5' key={platform.id}>
              <div className='flex items-center gap-[70px] justify-between'>
                <img src={platform.icon} alt="" />
                <div>
                  <p className='text-[#736E7B]'>{platform.url}</p>
                  <div className='flex items-center gap-3'>
                    {platform.connected ? <IoMdCheckmark className='text-xl text-[#8D42EA]' /> : <LiaTimesSolid className='text-xl text-white' />}
                    <span className='text-[white]'>{platform.connected ? "Connected" : "Disconnected"}</span>
                  </div>
                </div>
              </div>
              <div className={`flex  rounded-full py-0.5 px-0.5  w-[40px] h-[20px] cursor-pointer  ${toggles[platform.id] ? "bg-[#8D42EA]" : "bg-white"}`} onClick={()=>toggleSwitch(platform.id)}>
                <div className={`w-[14px] h-[14px] bg-white rounded-full  shadow-[0_2px_6px_rgba(0,0,0,0.3)] ${toggles[platform.id] ? "translate-x-[20px]" : "translate-x-[0]"}`} style={{ transition: "transform 0.3s ease-in-out" }}>

                </div>
              </div>
            </div>
            <div className='mt-5' style={{ borderBottom: "1px solid #34333B" }}></div>
          </>
        ))}


      </div>
    </div>
  )
}

export default Multistream