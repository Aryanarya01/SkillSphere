import React, { useEffect, useState } from "react";
import clientServer from "../api/client.js";
import { useParams } from "react-router-dom";
import socket from "../socket.js";
import { useSelector } from "react-redux";
const Chats = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const fetchMessages = async () => {
    try {
      const messages = await clientServer.get(`/messages/${id}`);
      setMessages(res.data.messages);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, [id]);

  useEffect(() => {
    socket.on("recieveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("recieveMessage");
    };
  }, []);

  const handleSend = async()=>{
     if (!text.trim())
        return;

    try{
        const res = await clientServer.post("/messages/send",{
            reciever : id,
            text,
        })
        setMessages((prev)=>[
            ...prev,res.data.message
        ]);
        socket.emit("recieveMessage",{
            reciever : id,
            message : res.data.message
        })
        setText("")
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl flex flex-col h-[85vh]">
        <div className="p-5 border-b">
          <h1 className="text-2xl font-bold">Chat</h1>
        </div>

        {/* message box */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.sender === user._id ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  msg.sender === user._id
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 border-t flex gap-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type message..."
            className="flex-1 border border-gray-300 rounded-xl px-4"
          />
          <button
            onClick={handleSend}
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
