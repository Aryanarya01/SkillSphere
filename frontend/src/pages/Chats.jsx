


import React, { useState } from 'react'
import clientServer from "../api/client.js"
const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [text,setText] = useState("");

    const fetchMessages = async()=>{
        try{
            const messages = await clientServer.get(`/messages/${id}`)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>Chats</div>
  )
}

export default Chats