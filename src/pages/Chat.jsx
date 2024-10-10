import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  ChatHeader,
  MessagesContainer,
  MessageInput,
} from "../components/chat";
import { useEffect } from "react";
import systemInstruction from "../lib/prompts/system-mental-health";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const generativeAi = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = generativeAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: systemInstruction,
});

// Main chat component
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [botReplied, setBotReplied] = useState(false);

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
      setBotReplied(false);
    }
  };

  useEffect(() => {
    const getResponse = async (prompt) => {
      const response = await model.generateContent(prompt);
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: response.response.text(),
          sender: "bot",
        },
      ]);
    };

    if (botReplied || messages.length == 0) return;
    getResponse(messages[messages.length - 1].text);
    setBotReplied(true);
  }, [messages, botReplied]);

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
