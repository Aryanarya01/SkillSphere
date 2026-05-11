import React, { useEffect, useState } from 'react'
import clientServer from '../api/client.js';
import { useParams } from 'react-router-dom';

const SingleJob = () => {

    const [job,setJob] = useState(null);
    const {id} = useParams();

    const fetchJob = async()=>{
        try{
            const res = await clientServer.get(`/jobs/${id}`);
            setJob(res.data.job);

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchJob();
    },[])

    if(!job){
        return (
            <div className='p-10'>
                Loading...
            </div>
        )
    }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                  <h1 className="text-4xl font-bold text-gray-800">
          {job.title}
        </h1>            
         </div>
    </div>
  )
}

export default SingleJob