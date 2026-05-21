


import React, { useEffect, useState } from 'react'
import clientServer from "../api/client.js"
import { useParams } from "react-router-dom";
import socket from "../socket.js"
import { useSelector } from "react-redux";
const Chats = () => {
    const {id} = useParams();
    const {user} = useSelector((state)=>state.auth)
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
    },[id]);

    useEffect(()=>{
        socket.on("recieveMessage",(message)=>{
            setMessages((prev)=>[...prev,message])
        });

        socket.off("recieveMessage")
    },[])

  return (
    <div>Chats</div>
  )
}

export default Chats