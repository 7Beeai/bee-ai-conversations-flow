
import { FC } from "react";
import { Message } from "@/types/chat";
import MessageContent from "./MessageContent";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
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
        <div className="text-sm md:text-base">
          <MessageContent text={message.text} />
        </div>
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
