

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
    },[])
  return (
    <div>ManageUser</div>
  )
}

export default ManageUser