// Message bubble component
export default function ({ message, isUser }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs md:max-w-md p-3 rounded-2xl 
        ${
          isUser
            ? "bg-teal-400 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}
