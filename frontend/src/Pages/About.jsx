import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div>
        <p>ABOUT <span>US</span> </p>
      </div>

      <div>
       <img src={assets.about_image} alt='' />
      </div>
      <p>At DigiCare Doc, we are dedicated to revolutionizing healthcare by providing seamless access to top medical professionals from the comfort of your home. Our online platform connects patients with experienced doctors for virtual consultations, ensuring timely medical advice, diagnosis, and treatment—anytime, anywhere.</p>
      <p>We believe in accessible, affordable, and quality healthcare for all. Whether you need a routine check-up, specialist consultation, or urgent medical guidance, our trusted healthcare professionals are just a click away.</p>
      <br>Our Vision</br>
      <p>To be the leading digital healthcare platform, transforming the way patients access medical care by providing seamless, efficient, and patient-centered online consultations. We envision a world where quality healthcare is accessible to everyone, anytime, anywhere, ensuring better health outcomes and enhanced well-being for all.</p>
    </div>
  )
}

export default About
