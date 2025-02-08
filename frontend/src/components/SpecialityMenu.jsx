import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find & Book the Best Doctors Near You</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Explore our carefully curated list of highly trusted, top-rated doctors. Booking your appointment has never been easier!
      </p>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div className="overflow-x-auto scrollbar-hide w-full sm:justify-center flex gap-4 pt-5">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500'
            to={`doctors/${item.speciality}`}
          >
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
