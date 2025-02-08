import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20'>
      
      {/* Left Side - Text Content */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt='' />
          <p>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href='#speciality'
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'
        >
          Book appointment <img className='w-3' src={assets.arrow_icon} alt='' />
        </a>
      </div>

      {/* Right Side - Image */}
      <div className='md:w-1/2 flex justify-end'>
        <img className='w-full h-auto rounded-lg' src={assets.header_img} alt='' />
      </div>
      
    </div>
  )
}

export default Header
