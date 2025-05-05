
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
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold">7Bee<span className="text-primary">.AI</span></span>
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
          <DemoButton size="sm" className="mr-2" />
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
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#como-funciona" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#beneficios" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#faq" 
                className="font-medium text-dark-base hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2">
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
