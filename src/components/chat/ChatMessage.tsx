
import { FC } from "react";
import DOMPurify from "dompurify";
import { Message } from "@/types/chat";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
  // Sanitize message text to prevent XSS attacks
  const sanitizedText = DOMPurify.sanitize(message.text, { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });

  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] rounded-lg p-3 ${
          message.sender === "user"
            ? "bg-primary text-white"
            : "bg-gray-100"
        }`}
      >
        <p className="text-sm md:text-base whitespace-pre-line">{sanitizedText}</p>
        <div className="text-xs opacity-70 mt-1 text-right">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
