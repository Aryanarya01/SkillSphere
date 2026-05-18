 
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
   <div className="min-h-screen bg-gray-100 p-6">
    <div className="mb-8">
         <h1 className="text-4xl font-bold">
          Notifications
        </h1>

        <p className="text-gray-500 mt-2">
          Your latest updates
        </p>
    </div>

    {notifications.length === 0 && (
        <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <p className="text-gray-500">
              No notifications yet
            </p>

          </div>
    )}
   </div>
  )
}

export default NotificationPage