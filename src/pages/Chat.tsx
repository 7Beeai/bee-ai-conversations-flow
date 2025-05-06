
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from "@/components/ui/use-toast";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Type for the webhook response
type WebhookResponse = {
  output: string;
  threadId: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    prompt_token_details: {
      cached_tokens: number;
    };
    completion_tokens_details: {
      reasoning_tokens: number;
    };
  };
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId] = useState(() => uuidv4());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: uuidv4(),
        text: "Olá, eu sou o Lucas Montivani, assistente IA da 7Bee! Como posso ajudar você hoje?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputText.trim()) return;
    
    const userMessage: Message = {
      id: uuidv4(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);
    
    // Send message to webhook
    try {
      const response = await fetch("https://n8n.7bee.com/webhook/7beelpchat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          userId: userId,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Parse the response
      const data = await response.json();
      
      // Check if the response is an array and extract the first item
      const responseData: WebhookResponse = Array.isArray(data) ? data[0] : data;
      
      // Extract the output text from the response
      const botResponse = responseData.output || "Desculpe, não consegui processar sua solicitação. Por favor, tente novamente.";
      
      setIsLoading(false);
      
      // Add bot response to messages
      setMessages(prev => [...prev, {
        id: uuidv4(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }]);
      
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Não foi possível enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
      
      // Add a fallback bot response
      setMessages(prev => [...prev, {
        id: uuidv4(),
        text: "Desculpe, estamos enfrentando problemas técnicos. Por favor, tente novamente em alguns instantes.",
        sender: "bot",
        timestamp: new Date(),
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-bg flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            7Bee<span className="text-primary">.AI</span>
          </a>
        </div>
      </header>

      {/* Chat container */}
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-12rem)]">
          {/* Chat messages */}
          <div className="h-[calc(100%-5rem)] overflow-y-auto p-4 md:p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
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
                    <p className="text-sm md:text-base whitespace-pre-line">{message.text}</p>
                    <div className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <div className="border-t h-20">
            <form onSubmit={sendMessage} className="flex items-center h-full px-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border-0 focus:ring-0 focus:outline-none"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputText.trim() || isLoading}
                className="ml-2 bg-primary hover:bg-primary/90 text-white"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
