import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col md:flex-row justify-between gap-10 my-10 mt-40 text-sm'>

        {/***---Left Section---- */}
        <div className='mb-5 w-40'>
          <img src={assets.logo} alt='DigiCare Logo' className='w-32 mb-4'/>      
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Empowering Health, Enhancing Lives. 
            Trusted Care Anytime, Anywhere. 🚀🏥
          </p>
        </div>

        {/***---Center Section ---*/}
        <div>
          <p  className='text-x1 font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 font-semibold text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/***--Right Section---- */}
        <div className=''>
          <p  className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 font-semibold text-gray-600'>
            <li>📞 +254-743-861-565 or +254-740-196-270</li>
            <li>📧 joellembithi@gmail.com</li>
          </ul>
        </div>
      </div>

      {/***----------Copyright Section-------- **/} 
      <div className=''>
        <hr className='my-2' />
        <p className='py-5 text-sm text-center'> © {new Date().getFullYear()} DigiCare Doc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
