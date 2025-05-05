
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type DemoButtonProps = {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

const DemoButton = ({ 
  className = "", 
  size = "default",
  variant = "default"
}: DemoButtonProps) => {
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (isMobile) {
      // Redirect to WhatsApp on mobile
      window.open('https://wa.me/5531984849770?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%207Bee.AI', '_blank');
    } else {
      // Open chat modal on desktop
      document.getElementById('chat-modal')?.classList.remove('hidden');
    }
  };

  return (
    <Button 
      onClick={handleClick}
      size={size}
      variant={variant}
      className={`animate-pulse-light font-medium w-full md:w-auto ${className}`}
    >
      👉 Quero uma demonstração agora
    </Button>
  );
};

export default DemoButton;
