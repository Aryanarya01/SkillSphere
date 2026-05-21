import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import client from "../api/client";

import socket from "../socket";

const Chats = () => {

  const { id } = useParams();

  const { user } =
    useSelector(
      (state) => state.auth
    );

  const [messages,
    setMessages] =
    useState([]);

  const [text, setText] =
    useState("");

  // =========================
  // FETCH CONVERSATION
  // =========================

  const fetchMessages =
    async () => {

      try {

        const res =
          await client.get(
            `/messages/${id}`
          );

        setMessages(
          res.data.messages
        );

      } catch (err) {

        console.log(err);

      }

    };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  // =========================
  // SOCKET RECEIVE
  // =========================

  useEffect(() => {

    socket.on(
      "receiveMessage",
      (message) => {

        setMessages(
          (prev) => [
            ...prev,
            message,
          ]
        );

      }
    );

    return () => {

      socket.off(
        "receiveMessage"
      );

    };

  }, []);

  // =========================
  // SEND MESSAGE
  // =========================

  const handleSend =
    async () => {

      if (!text.trim())
        return;

      try {

        const res =
          await client.post(
            "/messages/send",
            {
              receiver: id,
              text,
            }
          );

        // ADD TO UI
        setMessages(
          (prev) => [
            ...prev,
            res.data.message,
          ]
        );

        // SOCKET EMIT
        socket.emit(
          "sendMessage",
          {
            receiverId: id,
            message:
              res.data.message,
          }
        );

        setText("");

      } catch (err) {

        console.log(err);

      }

    };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl flex flex-col h-[85vh]">

        {/* HEADER */}
        <div className="p-5 border-b">

          <h1 className="text-2xl font-bold">
            Chat
          </h1>

        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">

          {
            messages.map(
              (msg) => (

                <div
                  key={msg._id}
                  className={`flex ${
                    msg.sender ===
                    user._id

                      ? "justify-end"

                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      msg.sender ===
                      user._id

                        ? "bg-black text-white"

                        : "bg-gray-200"
                    }`}
                  >

                    {msg.text}

                  </div>

                </div>

              )
            )
          }

        </div>

        {/* INPUT */}
        <div className="p-5 border-t flex gap-3">

          <input
            type="text"
            value={text}
            onChange={(e) =>
              setText(
                e.target.value
              )
            }
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