import React from 'react'
import { CgNotes } from "react-icons/cg";
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
import { RiVideoUploadLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { CgPlayListCheck } from "react-icons/cg";
import { BsBoxArrowUpRight } from "react-icons/bs";




const Sidebar = () => {

    const NavItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <CgNotes  /> },
        { name: 'Live', path: '/live', icon: <PiMonitorPlayBold  /> },
        { name: 'Schedule', path: '/schedule', icon: <FaCalendarDays  /> },
        { name: 'Media', path: '/media', icon: <SlPicture  /> },
        { name: 'Multistream', path: '/multistream', icon: <RiVideoUploadLine  /> },
        { name: 'Settings', path: '/settings', icon: <CiSettings  /> },
        { name: 'Subscription', path: '/subscription', icon: <CgPlayListCheck /> }
    ]

    return (
        <div className=' w-[20%]' style={{ borderRight: '1px solid #34333B' }}>
            <h1 className='text-3xl px-10 py-5 cursor-pointer'>LOGO</h1>
            <nav className='flex flex-col gap-8 justify-between'>
                <ul className="space-y-5 mt-10">
                    {NavItems.map((item, index) => (
                        <NavLink key={index} to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 text-lg w-full py-2 px-9 hover:bg-[#8D42EA] ${isActive ? 'bg-[#8D42EA] font-bold' : ''
                                }`
                            }
                        >
                            <span className="text-md">{item.icon}</span>
                            <span className="text-sm">{item.name}</span>

                        </NavLink>
                    ))}
                </ul>
                <div>
                    <a
                        href="/feature"
                        className="flex items-center gap-4 py-2 px-9 text-[14px] w-full mt-3  "
                    >
                        <span className="text-sm"><BsBoxArrowUpRight  /></span>
                        <span>Request a Feature</span>
                    </a>
                    <div className="w-[210px] h-[4px] bg-[#2F1450] ml-9 mt-5 rounded-2xl "></div>
                    <h1 className="py-3 px-9 text-[14px]">Used Storage: 0/65GB</h1>
                </div>
                <div>
                    <a
                        href="/logout"
                        className="flex items-center gap-4 text-red-600 text-[14px] w-full mt-5 py-2 px-9"
                    >
                        <span className="text-2xl"><MdLogout size={23} /></span>
                        <span>Logout</span>
                    </a>
                </div>
            </nav>

        </div>
    )
}

export default Sidebar