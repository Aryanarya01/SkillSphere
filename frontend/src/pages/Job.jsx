import React, { useEffect, useState } from 'react'
import clientServer from '../api/client.js';

const Job = () => {

    const [jobs,setJobs] = useState([]);

    const fetchJobs = async()=>{
        try{
            const res = await clientServer.get("/jobs");
            setJobs(res.data.jobs);

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchJobs();
    },[])

  return (
    <div className='min-h-screen bg-gray-100 p-6'> 
        <div >
            <h1>Available Jobs</h1>
            <p> Explore freelance opportunities</p>
        </div>

        <div>
            {
                jobs.map((job)=>(
                    <div key={job._id}>
                        <h2>{job.title}</h2>
                         <p className="text-gray-600 mt-3 line-clamp-3">
                {job.description}
              </p>
              <div>
                
              </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Job