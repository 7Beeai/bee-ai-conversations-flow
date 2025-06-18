
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to chat page for all devices
    navigate("/chat");
  };

  return (
    <Button 
      onClick={handleClick}
      size={size}
      variant={variant}
      className={`font-medium w-full md:w-auto ${className}`}
    >
      {children || "👉 Quero uma demonstração agora"}
    </Button>
  );
};

export default DemoButton;
