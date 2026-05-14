
import React, { useEffect, useState } from 'react'
import clientServer from '../api/client'

const AdminDashoboard = () => {

    const [stats,setStats] = useState({
         totalUser : 0,
      totalJobs : 0,
      totalProposals : 0,
    })


    const fetchStats = async()=>{
        try{
            const res = await clientServer.get("/admin/stats");
            setStats(res.data)
        }catch(err){
            console.log(err);
        }
    }

useEffect(()=>{
    fetchStats();
},[])

  return (
    <div> 

    <div>
        <h1>Admin Dashboard</h1>
        <p> Platform overview & analytics</p>
    </div>
    </div>
  )
}

export default AdminDashoboard