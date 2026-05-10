


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {

    const dispatch = useDispatch();
    const {isLoading} = useSelector((state)=>state.auth)

     const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "client",
  });
    


  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                 <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                    <p className='text-gray-500 mt-2'> Join SkillSphere today</p>
                 </div>


                


            </div>

     </div>
  )
}

export default Register