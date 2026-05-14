import React, { useEffect, useState } from 'react'
import clientServer from "../api/client.js";
const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async()=>{
    try{
      const res = await clientServer.get("/admin/jobs");
      setJobs(res.data.jobs)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchJobs();
  },[])

  const deleteJob = async(id)=>{
    try{

    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>ManageJobs</div>
  )
}

export default ManageJobs