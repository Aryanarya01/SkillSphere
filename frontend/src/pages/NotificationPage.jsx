 
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import clientServer from '../api/client.js'

const NotificationPage = () => {
    const [notifications,setNotifications] = useState([])

    const fetchNotification = async ()=>{
        try{
            const res = await clientServer.get("/notifications");
            setNotifications(res.data.notifications);
        }catch(err){
            toast.error("Error")
        }
    }
    useEffect(()=>{
        fetchNotification()
    },[])
  return (
    <div>NotificationPage</div>
  )
}

export default NotificationPage