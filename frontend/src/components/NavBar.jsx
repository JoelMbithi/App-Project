import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
     
      <div className="flex items-center justify-between text-sm py-4 px-6 border-b border-gray-300">
        <img onClick={() => navigate('/')} className="w-28 cursor-pointer" src={assets.logo} alt="DigiCare Logo" />

        
        <ul className="hidden sm:flex items-center gap-6 font-medium">
          <li className="py-1 border border-gray-300 px-4 rounded hover:scale-105 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="py-1 border border-gray-300 px-4 rounded hover:scale-105 transition-all">
            <Link to="/doctors">All Doctors</Link>
          </li>
          <li className="py-1 border border-gray-300 px-4 rounded hover:scale-105 transition-all">
            <Link to="/about">About</Link>
          </li>
          <li className="py-1 border border-gray-300 px-4 rounded hover:scale-105 transition-all">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

       
        <div className="hidden sm:flex items-center">
          {token ? (
            <div className="relative group">
              <img className="w-10 h-10 rounded-full cursor-pointer" src={assets.profile_pic} alt="User Profile" />

              
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                <p onClick={() => navigate('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/myAppointment')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Appointments</p>
                <p onClick={() => setToken(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">Logout</p>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
