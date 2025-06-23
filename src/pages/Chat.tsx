
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from "@/hooks/use-toast";
import { Message } from "@/types/chat";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInputForm from "@/components/chat/ChatInputForm";
import { sendChatMessage } from "@/services/chatService";
import { validateMessage, checkRateLimit } from "@/utils/security";

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
        text: "Olá, eu sou o Lucas Montivani, assistente IA da 7Bee! Como você prefere ser chamado?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Validate message
    const validation = validateMessage(inputText);
    if (!validation.isValid) {
      toast({
        title: "Erro de validação",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    // Check rate limiting
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      toast({
        title: "Muitas mensagens",
        description: rateLimitCheck.error,
        variant: "destructive",
      });
      return;
    }
    
    const userMessage: Message = {
      id: uuidv4(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);
    
    try {
      const botResponseText = await sendChatMessage(inputText, userId);
      
      // Log para debug - ver a resposta do bot
      console.log("=== Chat Debug - Resposta do Bot ===");
      console.log("Resposta recebida:", botResponseText);
      console.log("Comprimento:", botResponseText?.length);
      console.log("Tipo:", typeof botResponseText);
      
      // Add bot response to messages
      setMessages(prev => [...prev, {
        id: uuidv4(),
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      }]);
      
      setIsLoading(false);
      
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
      
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      
      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
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
      <ChatHeader />

      {/* Chat container */}
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-12rem)]">
          <ChatMessages 
            messages={messages} 
            isLoading={isLoading} 
            messagesEndRef={messagesEndRef} 
          />

          {/* Chat input */}
          <div className="border-t h-20">
            <ChatInputForm
              inputText={inputText}
              setInputText={setInputText}
              onSubmit={sendMessage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
