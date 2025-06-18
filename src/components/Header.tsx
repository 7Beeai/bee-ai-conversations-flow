
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
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center h-16 sm:h-20 md:h-auto">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/cca8416a-fa5d-420a-9868-2d8a9bbb063c.png" 
            alt="7Bee.AI Logo" 
            className="h-32 sm:h-36 md:h-40 lg:h-48 xl:h-56"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          <a href="#como-funciona" className="font-medium text-sm lg:text-base text-dark-base hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#beneficios" className="font-medium text-sm lg:text-base text-dark-base hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#faq" className="font-medium text-sm lg:text-base text-dark-base hover:text-primary transition-colors">
            FAQ
          </a>
          <DemoButton className="ml-2 lg:ml-4 text-sm lg:text-base py-2 px-4" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="ml-2 h-8 w-8 sm:h-10 sm:w-10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-3 sm:py-4">
          <div className="container mx-auto px-3 sm:px-4">
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <a 
                href="#como-funciona" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-2 text-sm sm:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#beneficios" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-2 text-sm sm:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#faq" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-2 text-sm sm:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="py-2">
                <a href="/chat" className="block">
                  <Button className="w-full justify-center text-sm sm:text-base py-2 sm:py-3">Saiba Mais</Button>
                </a>
              </div>
              <div className="py-2">
                <DemoButton className="w-full justify-center text-sm sm:text-base py-2 sm:py-3" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
