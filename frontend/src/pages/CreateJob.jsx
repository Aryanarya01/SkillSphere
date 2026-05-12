

import React, { useState } from 'react'

const CreateJob = () => {
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
  return (
    <div> 
      <div>

        {/* heading */}
        <div>
          <h1>Post a New Job</h1>
          <p>Find the best freelancers for your work</p>
        </div>


      <form> 

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