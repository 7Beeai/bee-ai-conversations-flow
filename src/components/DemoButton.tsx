
import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/contexts/LeadModalContext";

type DemoButtonProps = {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

const DemoButton = ({ 
  children,
  className = "", 
  size = "default",
  variant = "default"
}: DemoButtonProps) => {
  const { openModal } = useLeadModal();

  const handleClick = () => {
    openModal();
  };

  const displayText = children || "👉 Quero uma demonstração agora";

  return (
    <Button 
      onClick={handleClick}
      size={size}
      variant={variant}
      className={`
        font-medium 
        w-full sm:w-auto 
        text-sm sm:text-base 
        px-4 py-2 sm:px-6 sm:py-3 
        whitespace-normal 
        min-h-[44px] 
        leading-normal
        ${className}
      `}
    >
      {displayText}
    </Button>
  );
};

export default DemoButton;
