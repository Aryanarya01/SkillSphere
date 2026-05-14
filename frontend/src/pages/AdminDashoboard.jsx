
import React, { useState } from 'react'

const AdminDashoboard = () => {

    const [stats,setStats] = useState({
         totalUser : 0,
      totalJobs : 0,
      totalProposals : 0,
    })


    const fetchStats = async()=>{
        try{

        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>AdminDashoboard</div>
  )
}

export default AdminDashoboard