import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";


const SearchBar = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
     <div className='flex justify-around items-center w-full gap-6'>
      <div className='flex items-center py-3 px-4 w-[680px] ml-7 mt-10 mb-10 border border-[#34333B] rounded-lg'>
        <input
          type="text"
          placeholder='Search'
          className='w-full bg-transparent text-white outline-none'
        />
        <button type='button'>
          <CiSearch size={20} className='text-white' />
        </button>
      </div>

      <div
        className='relative flex items-center gap-1 mr-5 cursor-pointer'
        onClick={() => setShowOptions(!showOptions)}
      >
        <img
          className='rounded-full w-[35px] h-[35px]'
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60"
          alt="User"
        />
        <RiArrowDownSLine className='text-xl text-black' />

        {showOptions && (
          <div className='absolute bg-white top-[45px] left-0 rounded-md text-black w-[120px] shadow-md z-10'>
            <div className='flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer'>
              <img
                className='rounded-full w-[30px] h-[30px]'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60"
                alt="User Thumbnail"
              />
              <span className='text-[10px] font-bold'>Daniel James</span>
            </div>
            <div className='border-b border-[#DBDBDB] w-full'></div>
            <div className='flex flex-col p-2 gap-3'>
              <span className='text-[12px] cursor-pointer font-bold hover:text-blue-600'>Settings</span>
              <span className='text-[12px] cursor-pointer font-bold text-[#FF0000] hover:underline'>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar