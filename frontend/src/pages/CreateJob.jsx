

import React, { useState } from 'react'
import clientServer from '../api/client.js'
import { useNavigate } from 'react-router-dom'

const CreateJob = () => {
  const navigate = useNavigate();
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
  e.preventDefault();
  try{
    const res = await clientServer.post("/jobs/create",formData);

  }catch(err){
    console.log(err);
  }
}
  return (
    <div> 
      <div>

        {/* heading */}
        <div>
          <h1>Post a New Job</h1>
          <p>Find the best freelancers for your work</p>
        </div>


      <form onSubmit={handelSubmit}> 

        {/* title */}
      <div>
        <label>Job Title</label>
        <input name='title' value={formData.title} onChange={handelChange} type="text" placeholder="Enter job title" />
      </div>

      {/* description */}
      <div>
        <label>Description</label>
        <textarea name='description' value={formData.description} onChange={handelChange} placeholder='Enten job description' />
      </div>

      {/* budget */}
      <div>
        <label>Budget</label>
        <input name='budget' type="number" value={formData.budget} onChange={handelChange} placeholder='Enter budget' />
      </div>

      {/* Skills */}
      <div>
        <label>Skills Required</label>
        <input name='skillsRequired' type="text" value={formData.skillsRequired} onChange={handelChange}  placeholder="React, Node.js, MongoDB" />
      </div>

      {/* Deadline */}
      <div>
        <label>Deadline</label>
            <input name='deadline' value={formData.deadline} onChange={handelChange} type="date"  />
      </div>

      <button>Create Job</button>

      </form>


      </div>
    </div>
  )
}

export default CreateJob