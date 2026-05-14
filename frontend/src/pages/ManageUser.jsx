

import React from 'react'
import clientServer from '../api/client.js';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageUser = () => {

    const [users,setUsers] = useState([]);


    const fetchUser = async()=>{
        try{
            const res = await clientServer.get("admin/users");
            setUsers(res.data.users)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchUser();
    },[]);

    const handelDelete = async()=>{
        try{
            await clientServer.delete(`/admin/user/${id}`);
            fetchUser();
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        
        <div className='mb-8'>
            <h1 className='text-4xl font-bold'>Manage Users</h1>
            <p className='text-gray-500 mt-2'>Admin user management panel</p>
        </div>

    <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
        <table>
            <thead>
                <tr> 
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    </div>

    </div>
  )
}

export default ManageUser