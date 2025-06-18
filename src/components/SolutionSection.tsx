
import { Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section bg-neutral-bg py-12 sm:py-16 md:py-24" id="solucao">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 text-primary rounded-full font-medium text-sm sm:text-base md:text-lg mx-4 sm:mx-0">
            🚀 Nossa solução: IA com comportamento humano e foco em resultados
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
            Na 7Bee.AI, não desenvolvemos um chatbot genérico
          </h2>
          
          <p className="text-secondary-text text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Criamos IAs que entendem o contexto do seu negócio, respondem como humanos e atuam para vender, encantar e resolver.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
            <SolutionFeature 
              title="Conversas naturais e personalizadas" 
              description="Interações que parecem realmente humanas, adaptativas ao contexto e às necessidades do cliente." 
              emoji="🧠" 
            />
            
            <SolutionFeature 
              title="Qualificação automática de leads e oportunidades" 
              description="Algoritmos otimizados para qualificar, engajar e converter, seguindo sua estratégia de vendas." 
              emoji="🎯" 
            />
            
            <SolutionFeature 
              title="Escalabilidade instantânea sem perder qualidade" 
              description="Atenda centenas ou milhares de clientes simultaneamente, mantendo o padrão de excelência." 
              emoji="⚡" 
            />
            
            <SolutionFeature 
              title="Integração fácil com WhatsApp, CRM, site e muito mais" 
              description="Se conecta com suas ferramentas existentes de forma simples e eficiente." 
              emoji="🔌" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type SolutionFeatureProps = {
  title: string;
  description: string;
  emoji: string;
};

const SolutionFeature = ({ title, description, emoji }: SolutionFeatureProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="text-2xl sm:text-3xl md:text-4xl">
            {emoji}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{title}</h4>
          <p className="text-secondary-text text-sm sm:text-base md:text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
