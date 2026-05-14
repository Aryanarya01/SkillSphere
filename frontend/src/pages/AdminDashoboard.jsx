
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
    <div className='min-h-screen bg-gray-100 p-6'> 

    <div className='mb-10'>
        <h1 className='text-4xl font-bold'>Admin Dashboard</h1>
        <p className='text-gray-500 mt-2'> Platform overview & analytics</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

    <div className='bg-white rounded-2xl shadow-md p-6'>
        <h2 className='text-gray-500 text-lg'>Total Users</h2>
        <p className='text-5xl font-bold mt-4'>{stats.totalUser}</p>
    </div>

        <div className='bg-white rounded-2xl shadow-md p-6'>
            <h2 className='text-gray-500 text-lg'></h2>
             </div>

    </div>
    </div>
  )
}

export default AdminDashoboard