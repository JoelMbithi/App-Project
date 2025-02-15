import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Raw doctors data:", doctors);
    
    let filteredDoctors = speciality 
      ? doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase())
      : doctors;

    // Ensure uniqueness
    const uniqueDoctors = Array.from(new Map(filteredDoctors.map(doc => [doc._id, doc])).values());

    console.log("Filtered Unique Doctors:", uniqueDoctors);
    setFilterDoc(uniqueDoctors);
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors' specialties</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec) => (
            <p key={spec}
              onClick={() => navigate(speciality === spec ? "/doctors" : `/doctors/${spec}`)}
              className={`cursor-pointer border border-gray-300 rounded px-3 py-2 ${speciality === spec ? "bg-indigo-100 text-black" : ""}`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filterDoc.length > 0 ? (
            filterDoc.map((doctor) => (
              <div key={doctor._id} onClick={() => navigate(`/appointment/${doctor._id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'>
                <img className='bg-blue-50 w-full' src={doctor.image} alt={doctor.name} />
                <div className='p-4'>
                  <p className='text-green-500 font-bold'>Available</p>
                  <p className='font-semibold'>{doctor.name}</p>
                  <p className='text-gray-500'>{doctor.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No doctors found for this specialty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
