


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../redux/slices/authSlice.js';
import clientServer from '../api/client.js';

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

  const handleChange = async(e)=>{
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        dispatch(setLoading(false));
        const res = await clientServer.post("/register",formData);
        dispatch(setUser(res.data.user));
        alert("Registration Successful")
    }catch(err){
        console.log(err);
        alert("Registration Failed");
    }finally{
        
    }
  }


  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                 <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                    <p className='text-gray-500 mt-2'> Join SkillSphere today</p>
                 </div>


                 <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* Username */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* Role */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            >
              <option value="client">
                Client
              </option>

              <option value="freelancer">
                Freelancer
              </option>
            </select>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200"
          >
            {
              isLoading
                ? "Creating Account..."
                : "Register"
            }
          </button>

        </form>



            </div>

     </div>
  )
}

export default Register