import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";



const Login = () => {
  const dispatch = useDispatch();

  const {isLoading} = useSelector((state)=>state.auth);
  

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
          <input type="email" name='email' placeholder='Enter your email' value={formData.email}  />
        </div>


      <div>
        <label>Password</label>
        <input type="password" name='password' placeholder='Enter your password' value={formData.password} />
      </div>

      <button type='submit'></button>

      </form>
        

        <p> Don’t have an account?{" "} <span>Register</span></p>

         </div>
      </div>
  )
}

export default Login