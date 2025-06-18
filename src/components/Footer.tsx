
import { MessageSquare, MessageCircle, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return <footer className="bg-dark-base text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/47635054-007e-421d-ad0e-7d936dc34211.png" 
                alt="7Bee.AI Logo" 
                className="h-40 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Inteligência Artificial com comportamento humano para vendas, cobranças e atendimento.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://www.linkedin.com/company/7bee-ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/7bee.ai?igsh=MTZraHVyMWY0dDV1cA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-6">Soluções</h3>
            <ul className="space-y-4 flex-1">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Atendimento ao Cliente</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Vendas & Prospecção</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Cobrança & Recuperação</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Suporte Técnico</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Pesquisas de Satisfação</a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4 flex-1">
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-3 text-primary" />
                <a href="https://wa.me/5531984849770?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%207Bee.AI" className="text-gray-300 hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:contato@7bee.ai" className="text-gray-300 hover:text-primary transition-colors">andre@7bee.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 7Bee.AI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
