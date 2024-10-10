import { MessageBubble } from "./";

// Messages container component
export default function MessagesContainer({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 p-4 dark:bg-neutral-900">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          isUser={message.sender === "user"}
        />
      ))}
    </div>
  );
}
