


import React, { useEffect, useState } from 'react'
import clientServer from "../api/client.js"
import { useParams } from "react-router-dom";
const Chats = () => {
    const {id} = useParams()
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