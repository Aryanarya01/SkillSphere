import React, { useState } from 'react'

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async()=>{
    try{
      const res = await
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>ManageJobs</div>
  )
}

export default ManageJobs