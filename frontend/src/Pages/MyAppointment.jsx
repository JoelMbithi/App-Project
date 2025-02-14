import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const MyAppointment = () => {

  const { doctors } = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium tetx-zinc-700 border-b'>My Appointments</p>
      <div>
        {
          doctors.slice(0, 2).map((item, index) => (
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-gray-400 border-b' key={index}>
              <div>
                <img className='w-32 bg-indigo-100' src={item.image} alt={item.name} />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
                <p>Address</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p><span>Date & Time:</span>14, February, 2025 | 9:15 AM</p>
              </div>
              <div></div>
              <div>
                <button>Pay Online</button>
                <button>Cancel Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment
