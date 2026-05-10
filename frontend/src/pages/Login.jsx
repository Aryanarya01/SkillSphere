import React, { useState } from 'react'
import {useDispatch} from "react-redux"
const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email : "",
    password : "",
  });

  return (
     <div className="flex justify-center items-center h-screen">

      <form
       
        className="flex flex-col gap-4 w-[300px] border p-5 rounded"
      >

        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          
          className="border p-2 rounded"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
        
          className="border p-2 rounded"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login