import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Barnner from '../components/Barnner'
import Footer from '../components/Footer'
import AnimatedDispalay from '../components/AnimatedDispalay'

const Home = () => {
  return (
    <div className='text-black-500'>
      <Header/>
      <AnimatedDispalay />
      <SpecialityMenu />
      <TopDoctors />
      <Barnner />

    </div>
  )
}

export default Home
