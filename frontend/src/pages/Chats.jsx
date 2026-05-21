


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

       return ()=>{ socket.off("recieveMessage")}
    },[])

  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl flex flex-col h-[85vh]">
        <div className="p-5 border-b">

          <h1 className="text-2xl font-bold">
            Chat
          </h1>

        </div>
    </div>
   </div>
  )
}

export default Chats