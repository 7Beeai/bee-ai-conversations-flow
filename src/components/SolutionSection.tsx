
import { Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section bg-neutral-bg" id="solucao">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://source.unsplash.com/random/600x600/?ai,business" 
              alt="Solução inteligente 7Bee.AI" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
              Solução inteligente
            </div>
            <h2 className="mb-6">IA com comportamento humano, sem scripts engessados</h2>
            <p className="text-secondary-text text-lg mb-8">
              A 7Bee.AI vai além dos chatbots tradicionais. Nossa tecnologia foi treinada por empresários para entender o contexto do seu negócio e se adaptar às nuances de cada conversa.
            </p>
            
            <div className="space-y-4">
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
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="bg-primary rounded-full p-1">
          <Check className="h-5 w-5 text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-secondary-text">{description}</p>
      </div>
    </div>
  );
};

export default SolutionSection;
