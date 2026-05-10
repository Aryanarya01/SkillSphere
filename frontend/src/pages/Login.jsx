import React, { useState } from 'react'
import {useDispatch} from "react-redux";



const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email : "",
    password : "",
  })



  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
             <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>  

      <form>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
      </form>
        

         </div>
      </div>
  )
}

export default Login