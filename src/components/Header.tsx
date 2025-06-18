
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import DemoButton from "./DemoButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-0' : 'bg-transparent py-0'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/cca8416a-fa5d-420a-9868-2d8a9bbb063c.png" 
            alt="7Bee.AI Logo" 
            className="h-32 md:h-40 lg:h-48"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="ml-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-0">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col">
              <a 
                href="#como-funciona" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-0.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#beneficios" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-0.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#faq" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-0.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="py-0.5">
                <a href="/chat" className="block">
                  <Button className="w-full justify-center">Saiba Mais</Button>
                </a>
              </div>
              <div className="py-0.5">
                <DemoButton className="w-full justify-center" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
