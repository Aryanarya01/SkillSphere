


import React, { useEffect, useState } from 'react'
import clientServer from "../api/client.js"
const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [text,setText] = useState("");

    const fetchMessages = async()=>{
        try{
            const messages = await clientServer.get(`/messages/${id}`)
            setMessages(res.data.messages);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchMessages();
    },[id])
  return (
    <div>Chats</div>
  )
}

export default Chats