import React, { useState } from "react";
import {
  ChatHeader,
  MessagesContainer,
  MessageInput,
} from "../components/chat";

// Main chat component
export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! Welcome to the chat.",
      sender: "bot",
    },
    {
      id: 2,
      text: "Thanks! Love the new design with the teal color scheme!",
      sender: "user",
    },
    {
      id: 3,
      text: "How can I help you today?",
      sender: "bot",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: "user",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center transition duration-100 ease-in-out">
      <div className="flex flex-col h-full w-full rounded-2xl shadow-sm overflow-hidden border border-gray-200 dark:bg-neutral-900 dark:border-white/5">
        <ChatHeader />
        <MessagesContainer messages={messages} />
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSend={handleSend}
        />
      </div>
    </div>
  );
}
