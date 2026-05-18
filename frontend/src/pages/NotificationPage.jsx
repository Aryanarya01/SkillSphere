 
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NotificationPage = () => {
    const [notifications,setNotifications] = useState([])
    
    const fetchNotification = async ()=>{
        try{

        }catch(err){
            toast.error("Error")
        }
    }

  return (
    <div>NotificationPage</div>
  )
}

export default NotificationPage