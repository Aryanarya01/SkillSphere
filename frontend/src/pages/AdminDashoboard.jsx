
import React, { useState } from 'react'
import clientServer from '../api/client'

const AdminDashoboard = () => {

    const [stats,setStats] = useState({
         totalUser : 0,
      totalJobs : 0,
      totalProposals : 0,
    })


    const fetchStats = async()=>{
        try{
            const res = await clientServer.get("/admin/stats")
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>AdminDashoboard</div>
  )
}

export default AdminDashoboard