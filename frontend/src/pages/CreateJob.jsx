

import React, { useState } from 'react'

const CreateJob = () => {
const [formData, setFormData] = useState({
  title : "",
  description : "",
  budget : "",
  skillsRequired : "",
  deadline : "",
})

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
        <input name='title' onChange={} type="text" placeholder="Enter job title" />
      </div>

      {/* description */}
      <div>
        <label>Description</label>
        <textarea name='description' placeholder='Enten job description' />
      </div>

      {/* budget */}
      <div>
        <label>Budget</label>
        <input name='budget' type="number" placeholder='Enter budget' />
      </div>

      {/* Skills */}
      <div>
        <label>Skills Required</label>
        <input type="text"  placeholder="React, Node.js, MongoDB" />
      </div>

      {/* Deadline */}
      <div>
        <label>Deadline</label>
            <input type="date"  />
      </div>

      <button>Create Job</button>

      </form>


      </div>
    </div>
  )
}

export default CreateJob