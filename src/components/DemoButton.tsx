
import { Button } from "@/components/ui/button";

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
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  };

  const handleClick = () => {
    if (isMobile()) {
      // Mobile: direciona para WhatsApp
      window.open("https://wa.me/553184849770", "_blank");
    } else {
      // Desktop/Tablet: direciona para página de chat
      window.location.href = "/chat";
    }
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
