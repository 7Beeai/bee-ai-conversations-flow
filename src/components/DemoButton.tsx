
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      // Redirect to WhatsApp on mobile
      window.open('https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%207Bee.AI', '_blank');
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
      className={`animate-pulse-light font-medium ${className}`}
    >
      👉 Quero uma demonstração agora
    </Button>
  );
};

export default DemoButton;
