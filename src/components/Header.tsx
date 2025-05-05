
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold">7Bee<span className="text-primary">.AI</span></span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="font-medium text-dark-base hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#beneficios" className="font-medium text-dark-base hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#faq" className="font-medium text-dark-base hover:text-primary transition-colors">
            FAQ
          </a>
          <DemoButton className="ml-4" />
        </nav>
        <div className="block md:hidden">
          <DemoButton size="sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
