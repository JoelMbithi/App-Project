import React, { useState } from 'react'
import{ assets }from '../assets/assets' // Adjust the path to where your assets are located

const Profile = () => {

  const [userData, setUserData] = useState({
    name:"Joel Mbithi",
    image:assets.profile_pic,
    email:"joellembithi@gmail.com",
    phone:"+254 743 861 565",
    address:{
      line1:"TelAviv Nairobi",
      line2:"Chuka University"
    },
    gender:"male",
    dob:"2003-10-01"
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt=''/>
        
        {
          isEdit 
          ? <input onClick={e => setUserData(prev =>({...prev,name:e.target.value}))}  value={userData.name} type="text"/>
          : <p>{userData.name}</p>
         }          

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
      </div>
      <div>
        <p>Email id:</p>
        <p>{userData.email}</p>
        <p>Phone:</p>
        {
          isEdit 
          ? <input onClick={e => setUserData(prev =>({...prev,phone:e.target.value}))} value={userData.phone} type='text'/>
          : <p>{userData.phone}</p>
        }
        <p>Address:</p>
        {
          isEdit
          ? 
              <div>
                <input onChange={e => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value}}))} value={userData.address.line1} type='text'/>
                <br />
                <input onChange={e => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value}}))} value={userData.address.line2} type='text'/>
              </div>
          :
              <div>
                <p>{userData.address.line1}</p>
                <br />
                <p>{userData.address.line2}</p>
              </div>
           
        }
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gende:</p>
          {
            isEdit 
            ? <select >
              <ption value="Male">Male</ption>
              <ption value="Female">Female</ption>
            </select>
            : <p></p>
          }
        </div>
      </div>
    </div>
    
  )
}

export default Profile
