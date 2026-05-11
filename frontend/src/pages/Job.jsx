import React, { useState } from 'react'

const Job = () => {

    const [jobs,setJobs] = useState([]);

    const fetchJobs = async()=>{
        try{

        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='min-h-screen bg-gray-100 p-6'> 
        <div >
            <h1>Available Jobs</h1>
            <p> Explore freelance opportunities</p>
        </div>

        <div>
            {
                
            }
        </div>
    </div>
  )
}

export default Job