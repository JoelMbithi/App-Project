import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const AnimatedDisplay = () => {
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate(); // Initialize navigation
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance the slideshow every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
        }, 8000); // 8 seconds

        return () => clearInterval(interval);
    }, [doctors.length]);

    // Handle manual navigation
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
    };

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Find & Book the Best Doctors Near You</h1>  
            <p className='sm:w-1/3 text-center text-sm'>
                Explore our carefully curated list of highly trusted, top-rated doctors. Booking your appointment has never been easier!
            </p>
        
            {/* Slideshow Container */}
            <div className='w-full h-[500px] overflow-hidden relative'>
                {doctors.slice(0, 5).map((doctor, index) => (
                    <div
                        key={doctor.id || doctor._id}
                        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div 
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer w-3/4 h-4/5 flex flex-col'
                            onClick={() => {navigate(`/appointment/${doctor.id || doctor._id}`); window.scrollTo(0, 0);}}
                        >
                            <img 
                                className='bg-blue-50 w-full h-3/4 object-cover' 
                                src={doctor.image} 
                                alt={doctor.name} 
                            />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                    <p>Available</p>
                                </div>
                                <p className='font-semibold'>{doctor.name}</p>
                                <p className='text-gray-500'>{doctor.speciality}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className='flex gap-4 mt-4'>
                <button onClick={goToPrevious} className='px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-all'>
                    Previous
                </button>
                <button onClick={goToNext} className='px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-all'>
                    Next
                </button>
            </div>
            
            <button className='mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-all'>
                More
            </button>
        </div>
    );
};

export default AnimatedDisplay;