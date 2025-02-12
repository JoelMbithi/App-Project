import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
       <NavBar />

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:speciality' element={<Doctors/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/myAppointment' element={< MyAppointment />} />
      <Route path='/appointment/:docId' element={<Appointment/>}/>
     </Routes>
       
       <Footer />
    </div>
  )
}

export default App
