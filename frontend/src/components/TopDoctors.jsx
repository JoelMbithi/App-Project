import React, { useContext } from 'react'
import { Appcontext } from '../Context/AppContext'

const TopDoctors = () => {
    // Fix: Use useContext instead of useState
    const { doctors } = useContext(Appcontext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Find & Book the Best Doctors Near You</h1>  
            <p className='sm:w-1/3 text-center text-sm'>
                Explore our carefully curated list of highly trusted, top-rated doctors. Booking your appointment has never been easier!
            </p>
        
            {/* Fix: Corrected grid class */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'>
                        <img className='bg-blue-50 w-full' src={item.image} alt={item.name} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='font-semibold'>{item.name}</p>
                            <p className='text-gray-500'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className='mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all'>
                More
            </button>
        </div>
    )
}

export default TopDoctors
