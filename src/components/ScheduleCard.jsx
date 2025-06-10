import React from 'react'
import { RiAlarmFill } from "react-icons/ri";



const ScheduleCard = () => {
    return (
        <div className='bg-[#1D1C1F]  w-[150px] h-[150px] rounded-md flex flex-col items-center justify-between px-1 py-3'>
            <h2 className='text-sm text-center'>Staff Interview Video.mp4</h2>
            <div className='flex flex-col items-center justify-between gap-3  '>
                <div className='flex items-center gap-1 mt-5'>

                    <RiAlarmFill className='text-sm' />

                    <span className='text-sm'>Start: 12:00 PM</span>
                </div>
               <div className='flex items-center gap-1 '>

                    <RiAlarmFill className='text-sm' />

                    <span className='text-sm'>End: 02:30 PM</span>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCard