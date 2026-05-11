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
    <div>SingleJob</div>
  )
}

export default SingleJob