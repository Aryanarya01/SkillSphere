
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import clientServer from '../api/client.js';

const PortfolioProjects = ({userId}) => {
    const [projects, setProjects] = useState([]);
    const fetchProjects = async()=>{
        try{
            const res = await clientServer.get(`/portfolio/${userId}`);
            setProjects(res.data.projects);
        }catch(err){
            console.log(err);
            toast.error("Error fetching projects.")
        }
    }

    useEffect(()=>{
        fetchProjects()
    },[userId])
  return (
    <div className="mt-10">
         <h2 className="text-3xl font-bold mb-6">

        Portfolio Projects

      </h2>

      
    </div>
  )
}

export default PortfolioProjects