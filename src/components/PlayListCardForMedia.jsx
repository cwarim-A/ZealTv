import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ImFilm } from 'react-icons/im'
import { IoMdPlay } from 'react-icons/io'

const PlayListCardForMedia = ({backgroundColor}) => {
  return (
    <div className='flex items-center justify-between px-5 py-2' style={{ backgroundColor: backgroundColor }}>
                <div className='flex items-center gap-2 justify-center'>
                    <ImFilm className='text-xl' />
                    <h2>Staff Interview Video.mp4</h2>
                </div>
    
                <IoMdPlay />
    
                <h2>00:09:98</h2>
    
                <BsThreeDotsVertical className='text-xl' />
    
    </div>
  )
}

export default PlayListCardForMedia