
import { FC, FormEvent } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <form onSubmit={onSubmit} className="flex items-center h-full px-4">
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
  );
};

export default ChatInputForm;
