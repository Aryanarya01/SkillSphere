import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setLoading, setUser} from "../redux/slices/authSlice.js"
import clientServer from '../api/client.js';


const Login = () => {
  const dispatch = useDispatch();

  const {setUser, isLoading} = useSelector((state)=>state.auth);


  const [formData, setFormData] = useState({
    email : "",
    password : "",
  })

  const handelChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      dispatch(setLoading(true));
      const res =   await clientServer.post("/login",formData)
      dispatch(setUser(res.data.user));
      alert("Login Successful");
    }catch(err){
      console.log(err);

         alert(
        err.response?.data?.message ||
        "Login failed"
      );
      
    }finally{

    }
  }

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

      <form  onSubmit={handleSubmit}
          className="space-y-5">
        <div>
          <label>Email</label>
          <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handelChange} />
        </div>


      <div>
        <label>Password</label>
        <input type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handelChange}/>
      </div>

      <button type='submit' disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>

      </form>
        

        <p> Don’t have an account?{" "} <span>Register</span></p>

         </div>
      </div>
  )
}

export default Login