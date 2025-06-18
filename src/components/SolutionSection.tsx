
import { Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section bg-neutral-bg py-16 md:py-24" id="solucao">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-primary/10 text-primary rounded-full font-medium text-lg">
            🚀 Nossa solução: IA com comportamento humano e foco em resultados
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            A 7Bee.AI é muito mais que um chatbot
          </h2>
          
          <p className="text-secondary-text text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            É uma agente de IA treinada com dados reais de empresas para se adaptar, aprender e converter mais.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
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
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
      <div className="flex gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="text-4xl">
            {emoji}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-3">{title}</h4>
          <p className="text-secondary-text text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
