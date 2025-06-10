import React from 'react'

const PlaylistComponent = ({ isActive = false }) => {
    return (
        <div className='relative flex gap-4 p-4 items-center rounded-md mt-5' style={{ border: "1px solid #34333B" }}>

            {isActive &&
             <div 
             className="absolute left-0 top-0 h-full w-[80%] rounded-l-md bg-gradient-to-r from-[#A143FF] via-[#420988] to-transparent opacity-100 pointer-events-none z-0" />}



            <img
                src="https://images.unsplash.com/photo-1527772291563-41d27d5052ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your video thumbnail
                alt="Playlist Thumbnail"
                className="w-[150px] h-[180px] object-cover rounded-md z-10"
            />
            <div className='z-10 '>
                <p className="text-lg ">Staff Interview Video.mp4</p>
                <div className='flex items-center justify-between gap-10 w-[450px] px-3 py-0  mt-5 rounded-lg' style={{ border: "1px solid #34333B" }} >
                    <p className='text-[14px] '>Sat.25 May,2025(12:00pm)</p>
                    <p className='text-[14px] '>To</p>
                    <p className='text-[14px] '>Sat.25 May,2025(2:30pm)</p>
                </div>
                <div className='flex gap-10 items-center justify-between'>
                    <div className='flex gap-10 mt-5'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-[14px]'>Video Length</h3>
                            <h3 className='text-[14px]'>Bitrate</h3>
                            <h3 className='text-[14px]'>Frame Rate</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[14px] '>14 minutes</p>
                            <p className='text-[14px] '>4200kbps</p>
                            <p className='text-[14px] '>30 fps</p>
                        </div>
                    </div>
                    <div className='flex gap-10 mt-5'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-[14px]'>Buffer Events</h3>
                            <h3 className='text-[14px]'>Sample rate</h3>
                            <h3 className='text-[14px]'>Latency</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[14px] '>2</p>
                            <p className='text-[14px] '>480kHz</p>
                            <p className='text-[14px] '>30s</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlaylistComponent