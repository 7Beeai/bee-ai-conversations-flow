
import { FC, RefObject } from "react";
import { Message } from "@/types/chat";
import ChatMessage from "./ChatMessage";
import ChatLoadingIndicator from "./ChatLoadingIndicator";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
}

const ChatMessages: FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  messagesEndRef,
}) => {
  return (
    <div className="h-[calc(100%-5rem)] overflow-y-auto p-4 md:p-6">
      <div className="space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <ChatLoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
