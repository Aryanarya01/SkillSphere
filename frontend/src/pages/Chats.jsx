


import React, { useState } from 'react'

const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [text,setText] = useState("");

    const fetchMessages = async()=>{
        try{

        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>Chats</div>
  )
}

export default Chats