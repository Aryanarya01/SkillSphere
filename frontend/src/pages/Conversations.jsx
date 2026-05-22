import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import clientServer from "../api/client.js";
import { useEffect } from "react";

const Conversations = () => {
  const [conversations, setConversations] = useState([]);
  const fetchConversations = async () => {
    try {
      const res = await clientServer.get("/messages/conversations/all");
      setConversations(res.data.conversations);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConversations();
  }, []);
  return (
    <div className="w-80 bg-white border-r h-full overflow-y-auto">
      <div className="p-5 border-b">
        <h2 className="text-2xl font-bold">Chats</h2>
      </div>

      {/* users */}
      <div className="space-y-2 p-3">
        {conversations.map((user) => (
          <Link
            key={user._id}
            to={`/chat/${user._id}`}
            className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-xl transition"
          >
            <img
              src={`http://localhost:9090${user.profilePicture}`}
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            {/* information */}
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">Open Chat</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Conversations;
