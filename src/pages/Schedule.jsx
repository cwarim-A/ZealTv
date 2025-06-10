import { useState } from 'react'
import ScheduleColumn from '../components/ScheduleColumn'
import { IoMdClose } from "react-icons/io";
import PlayListCard from '../components/PlayListCard';


const Schedule = () => {
  const [openModal, setOpenModal] = useState(false)

    const handleModal = () => {
        setOpenModal(true)
    }

    const closeModal = ()=>{
        setOpenModal(false)
    }

  return (
    <div className='mt-7 mb-12' >
      <ScheduleColumn day="Sunday" color="#2E0761" onOpenModal={handleModal} />
      <ScheduleColumn day="Monday" color="#800080" onOpenModal={handleModal} />
      <ScheduleColumn day="Tuesday" color="#4553E9" onOpenModal={handleModal} />
      <ScheduleColumn day="Wednesday" color="#8869B1" onOpenModal={handleModal} />
      <ScheduleColumn day="Thursday" color="#874887" onOpenModal={handleModal} />
      <ScheduleColumn day="Friday" color="#8A91DD" onOpenModal={handleModal} />
      <ScheduleColumn day="Saturday" color="#594759" onOpenModal={handleModal} />
      <div className='flex justify-end gap-5 mt-5 px-10'>
        <button className='px-3 py-2 rounded-md text-[#8D42EA]' style={{ border: "1px solid #8D42EA " }}>Duplicate</button>
        <button className='bg-[#8D42EA] px-5 py-2 rounded-md'>Save</button>
      </div>
      {openModal && (
        <div className='fixed inset-0 bg-[#000000A8] bg-opacity-70 flex items-center justify-center  z-50 '>
          <div className='bg-[#190D27] w-[60%] p-5 rounded-md shadow-lg mt-30' >
            <div className='flex items-center justify-between mb-5'>
              <h2>Sunday</h2>
              <IoMdClose size={20} onClick={closeModal} className='cursor-pointer' />
            </div>
            <div className='p-7 ' style={{border:"1px solid #34333B"}} >
              <div className='flex items-center justify-between mt-5 px-5' style={{border:"1px solid #34333B"}}>
                <h2>Playlist</h2>
                <div className='flex gap-3'>
                  <button className='px-3 py-2 rounded-md text-[#8D42EA]' style={{ border: "1px solid #8D42EA " }}>Duplicate Playlist</button>
                  <button className='bg-[#8D42EA] px-5 py-2 rounded-md'>Add New</button>
                </div>
              </div>
              <div className='max-h-[400px] overflow-y-auto space-y-4 pr-2'>
                {Array.from({ length: 15 }).map((_, index) => (
                  <PlayListCard key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Schedule