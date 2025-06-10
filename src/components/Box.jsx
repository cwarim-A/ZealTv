import React from 'react'
import { TiArrowUp } from "react-icons/ti";

const Box = ({name,number,rate}) => {
  return (
    <div className='bg-[#190D27] text-white flex-1 h-32 p-5 rounded-md'>
        <h3 className='text-lg mb-3'>{name}</h3>
        <div className='flex  justify-between items-center  '>
            <h1 className='font-bold text-3xl'>{number}</h1>
            <div className='flex items-center w-[70px] h-[25px] bg-white text-black rounded-md ' style={{border:"1px solid gray"}}>
                {/* icon */}
                <TiArrowUp size={20} className='text-green-500' />
                <span className='text-[14px]'>{rate}%</span>
            </div>
        </div>
        

    </div>
  )
}

export default Box