import { useEffect } from "react";
import DemoButton from "./DemoButton";

const SolutionSection = () => {
  return (
    <section className="section bg-white" id="solucao">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">A solução 7Bee.AI</h2>
          <p className="text-secondary-text text-xl max-w-3xl mx-auto">
            Inteligência artificial com comportamento humano para vendas, atendimento e relacionamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Atendimento humanizado em escala</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">1</span>
                <div>
                  <p className="font-bold mb-1">Personalização avançada</p>
                  <p className="text-secondary-text">Assistentes virtuais que se adaptam ao tom, personalidade e valores da sua marca.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">2</span>
                <div>
                  <p className="font-bold mb-1">Conhecimento especializado</p>
                  <p className="text-secondary-text">Treinados com informações específicas do seu negócio, produtos e processos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">3</span>
                <div>
                  <p className="font-bold mb-1">Conversas naturais</p>
                  <p className="text-secondary-text">Diálogos fluidos que entendem contexto, nuances e intenções dos clientes.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/600x400/?ai,technology" 
              alt="Solução 7Bee.AI" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/600x400/?dashboard,analytics" 
              alt="Dashboard 7Bee.AI" 
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-6">Inteligência para resultados</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">4</span>
                <div>
                  <p className="font-bold mb-1">Aprendizado contínuo</p>
                  <p className="text-secondary-text">Melhoria constante baseada em interações reais com seus clientes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">5</span>
                <div>
                  <p className="font-bold mb-1">Análise de sentimento</p>
                  <p className="text-secondary-text">Identificação de emoções e ajuste de abordagem para maximizar satisfação.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">6</span>
                <div>
                  <p className="font-bold mb-1">Métricas em tempo real</p>
                  <p className="text-secondary-text">Dashboard completo com KPIs de desempenho e insights acionáveis.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <DemoButton className="text-lg py-4 px-6" />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
