 
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import clientServer from '../api/client.js'

const NotificationPage = () => {
    const [notifications,setNotifications] = useState([])

    const fetchNotification = async ()=>{
        try{
            const res = await clientServer.
        }catch(err){
            toast.error("Error")
        }
    }

  return (
    <div>NotificationPage</div>
  )
}

export default NotificationPage