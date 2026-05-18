 
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


    {/* notifications */}

    <div className='space-y-4'>
        {
            notifications.map((notification)=>(
                 <div
                key={
                  notification._id
                }
                className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center"
              >

                <div>

                  <p className="font-medium">
                    {
                      notification.message
                    }
                  </p>

                  <p className="text-sm text-gray-500 mt-1">

                    {
                      new Date(
                        notification.createdAt
                      ).toLocaleString()
                    }

                  </p>
                </div>
                

                  <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    notification.read
                      ? "bg-gray-200 text-gray-700"
                      : "bg-green-500 text-white"
                  }`}
                >
                    {notification.read ? "Read" : "New"}
                </span>


                </div>
            ))
        }
    </div>


   </div>
  )
}

export default NotificationPage