

import React from 'react'

const CreateJob = () => {
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
        <input type="text" placeholder="Enter job title" />
      </div>

      {/* description */}
      <div>
        <label>Description</label>
        <textarea placeholder='Enten job description' />
      </div>

      {/* budget */}
      <div>
        <label>Budget</label>
        <input type="number" placeholder='Enter budget' />
      </div>


      </form>


      </div>
    </div>
  )
}

export default CreateJob