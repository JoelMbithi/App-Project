import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors'

const NavBar = () => {
const[showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)

return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400'>
        <img className='w-35 cursor-pointer' src={assets.logo} alt='' />

        <ul className='hidden sm:flex items-start gap-4 font-medium relative'>
            <li className='py-1'>
                <Link to='/' element={<Home />}>Home</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </li>
            <li className='py-1'>
                <Link to='/doctors' element={<Doctors />}>All Doctors</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </li>
            <li className='py-1'>
                <Link to='/about' element={<About />}>About</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </li>
            <li className='py-1'>
                <Link to='/contacts' element={<Contact />}>Contacts</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </li>
        </ul>

        <div className='hidden sm:flex my-5'>
            {
                token ?
                    <div className='relative group'>
                        <img className='w-8 rounded' src={assets.profile_pic} alt='' />
                        <img className='w-2.5' src={assets.dropdown_icon} alt='' />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('/Profile')} className='hover:text-black cursor-pointer'>My profile</p>
                                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={()=> setToken} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    : <button className='bg-blue-500 text-white px-3 py-3 rounded-full font-light'>Create account</button>
            }
        </div>
    </div>
)
}

export default NavBar
