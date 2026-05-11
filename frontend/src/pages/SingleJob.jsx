import React, { useState } from 'react'
import clientServer from '../api/client';

const SingleJob = () => {

    const [job,setJob] = useState(null);


    const fetchJob = async()=>{
        try{
            const res = await clientServer.get("/jobs/:id");
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>SingleJob</div>
  )
}

export default SingleJob