

import React, { useState } from 'react'
import clientServer from '../api/client.js';

const FreelancerDashboard = () => {

    const [proposals,setProposals] = useState([]);

    const fetchPropsals = async()=>{
        try{
            const res = await clientServer.get("/proposal/my_proposals")
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div>
        
    </div>
  )
}

export default FreelancerDashboard