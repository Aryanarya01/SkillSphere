
import React, { useState } from 'react'
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
  return (
    <div>PortfolioProjects</div>
  )
}

export default PortfolioProjects