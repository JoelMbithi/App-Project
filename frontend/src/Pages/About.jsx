import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div >
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span> </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
       <img className='w-full md:max-w-[350px]' src={assets.about_image} alt='' />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
      <p>At DigiCare Doc, we are dedicated to revolutionizing healthcare by providing seamless access to top medical professionals from the comfort of your home. Our online platform connects patients with experienced doctors for virtual consultations, ensuring timely medical advice, diagnosis, and treatment—anytime, anywhere.</p>
      <p>We believe in accessible, affordable, and quality healthcare for all. Whether you need a routine check-up, specialist consultation, or urgent medical guidance, our trusted healthcare professionals are just a click away.</p>
      <b className='text-gray-800'>Our Vision</b>
      <p>To be the leading digital healthcare platform, transforming the way patients access medical care by providing seamless, efficient, and patient-centered online consultations. We envision a world where quality healthcare is accessible to everyone, anytime, anywhere, ensuring better health outcomes and enhanced well-being for all.</p>
    </div>
    </div>
    <div className='text-xl my-4'>
     <p> WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
    </div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  )
}

export default About
