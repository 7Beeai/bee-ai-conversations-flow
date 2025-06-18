
import { Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section bg-neutral-bg py-16 md:py-24" id="solucao">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-primary/10 text-primary rounded-full font-medium text-lg">
            Solução inteligente
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            IA com comportamento humano, sem scripts engessados
          </h2>
          
          <p className="text-secondary-text text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            A 7Bee.AI vai além dos chatbots tradicionais. Nossa tecnologia foi treinada por empresários para entender o contexto do seu negócio e se adaptar às nuances de cada conversa.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <SolutionFeature 
              title="Conversas Naturais e Personalizadas" 
              description="Interações que parecem realmente humanas, adaptativas ao contexto e às necessidades do cliente."
            />
            
            <SolutionFeature 
              title="Foco em Resultados" 
              description="Algoritmos otimizados para qualificar, engajar e converter, seguindo sua estratégia de vendas."
            />
            
            <SolutionFeature 
              title="Escalabilidade Instantânea" 
              description="Atenda centenas ou milhares de clientes simultaneamente, sem perder qualidade."
            />
            
            <SolutionFeature 
              title="Integração Fácil" 
              description="Se conecta com suas ferramentas existentes: CRM, WhatsApp, site e muito mais."
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
};

const SolutionFeature = ({ title, description }: SolutionFeatureProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
      <div className="flex gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="bg-primary rounded-full p-2">
            <Check className="h-6 w-6 text-white" />
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
