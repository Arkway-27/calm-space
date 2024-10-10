import { Send } from "lucide-react";

// Message input component
export default function MessageInput({
  newMessage,
  setNewMessage,
  handleSend,
}) {
  return (
    <form
      onSubmit={handleSend}
      className="p-4 border-t border-gray-100 dark:bg-neutral-900 dark:border-white/5"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent dark:bg-neutral-900 dark:border-white/5 transition-all"
        />
        <button
          type="submit"
          className="p-3 rounded-full bg-teal-400 hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
        >
          <Send size={18} />
        </button>
      </div>
    </form>
  );
}
