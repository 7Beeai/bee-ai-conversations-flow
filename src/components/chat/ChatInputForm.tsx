
import { FC, FormEvent } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { validateMessage, INPUT_LIMITS } from "@/utils/security";

interface ChatInputFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  onSubmit: (e?: FormEvent) => void;
  isLoading: boolean;
}

const ChatInputForm: FC<ChatInputFormProps> = ({
  inputText,
  setInputText,
  onSubmit,
  isLoading,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Enforce maximum length
    if (value.length <= INPUT_LIMITS.MAX_MESSAGE_LENGTH) {
      setInputText(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const validation = validateMessage(inputText);
    if (!validation.isValid) {
      // In a real app, you'd show this error to the user
      console.warn("Input validation failed:", validation.error);
      return;
    }
    
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center h-full px-4">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Digite sua mensagem..."
        className="flex-1 px-4 py-2 border-0 focus:ring-0 focus:outline-none"
        disabled={isLoading}
        maxLength={INPUT_LIMITS.MAX_MESSAGE_LENGTH}
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
  );
};

export default ChatInputForm;
