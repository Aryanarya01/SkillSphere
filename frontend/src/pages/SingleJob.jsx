import React, { useState } from 'react'

const SingleJob = () => {

    const [job,setJob] = useState(null);


    const fetchJob = async()=>{
        try{

        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>SingleJob</div>
  )
}

export default SingleJob