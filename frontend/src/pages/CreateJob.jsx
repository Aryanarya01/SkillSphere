

import React, { useState } from 'react'
import clientServer from '../api/client.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { setLoading } from '../redux/slices/authSlice.js';

const CreateJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const {isLoading} = useSelector((state)=>state.auth)
const [formData, setFormData] = useState({
  title : "",
  description : "",
  budget : "",
  skillsRequired : "",
  deadline : "",
})

const handelChange = (e)=>{
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  })
}

const handelSubmit = async(e)=>{
   dispatch(setLoading(true));
  e.preventDefault();
  try{
    const mainRes = {
      ...formData,
      skillsRequired : formData.skillsRequired.split(",").map((skill)=>skill.trim())
    }
    const res = await clientServer.post("/jobs/create",mainRes);
    toast.success(res.data.message);
    dispatch(setLoading(false))
    navigate("/jobs");
  }catch(err){
    console.log(err);
  }
}
  return (
  <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className='w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8'> 

        {/* heading */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-800'>Post a New Job</h1>
          <p className='text-gray-500 mt-2'>Find the best freelancers for your work</p>
        </div>


      <form className='space-y-6' onSubmit={handelSubmit}> 

        {/* title */}
      <div>
        <label className='block mb-2 font-medium'>Job Title</label>
        <input className='w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black' name='title' value={formData.title} onChange={handelChange} type="text" placeholder="Enter job title" />
      </div>

      {/* description */}
      <div>
        <label className='block mb-2 font-medium'>Description</label>
        <textarea className='w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black' name='description' value={formData.description} onChange={handelChange} placeholder='Enten job description' />
      </div>

      {/* budget */}
      <div>
        <label className='block mb-2 font-medium'>Budget</label>
        <input className='w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black' name='budget' type="number" value={formData.budget} onChange={handelChange} placeholder='Enter budget' />
      </div>

      {/* Skills */}
      <div>
        <label className='block mb-2 font-medium'>Skills Required</label>
        <input className='w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black' name='skillsRequired' type="text" value={formData.skillsRequired} onChange={handelChange}  placeholder="React, Node.js, MongoDB" />
      </div>

      {/* Deadline */}
      <div>
        <label className='block mb-2 font-medium'>Deadline</label>
            <input className='w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black' name='deadline' value={formData.deadline} onChange={handelChange} type="date"  />
      </div>

      <button className='w-full bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition' type='submit'>{isLoading ? "Creating Job..." : "Create Job"}</button>

      </form>


      </div>
    </div>
  )
}

export default CreateJob