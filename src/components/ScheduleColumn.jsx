import React, { useState } from 'react'
import ScheduleCard from './ScheduleCard'
import { BsThreeDotsVertical } from "react-icons/bs";


const ScheduleColumn = ({ day, color,onOpenModal }) => {
    
    return (
        <div className='px-6 py-2'>
            <div className='flex flex-col gap-4 px-8 py-8 border ' style={{ borderColor: "#34333B", borderTopRightRadius: "7px", borderEndEndRadius: "7px" }}>

                <div className='flex justify-end'>
                    <BsThreeDotsVertical className='text-xl cursor-pointer' onClick={onOpenModal} />
                </div>

                <div className='flex gap-4'>
                    <div
                        className='w-[150px] h-[150px] rounded-md flex flex-col items-center p-10'
                        style={{ backgroundColor: color }}
                    >
                        <h2 className='text-2xl font-bold'>{day}</h2>
                        <div
                            className='h-[40px] w-[40px] mt-3 text-black text-2xl bg-white flex items-center justify-center rounded-md font-bold'
                            style={{
                                boxShadow: '4px 4px 10px rgba(64, 0, 128, 0.4)'
                            }}
                        >
                            25
                        </div>
                    </div>

                    <ScheduleCard />
                    <ScheduleCard />
                    <ScheduleCard />
                    <ScheduleCard />
                    <ScheduleCard />
                </div>
            </div>
        </div>

    )
}

export default ScheduleColumn