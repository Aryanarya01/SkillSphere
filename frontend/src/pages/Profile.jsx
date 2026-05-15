
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
const {user} = useSelector((state)=>state.auth);


  return (
     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
         <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
            
         </div>
     </div>
  )
}

export default Profile