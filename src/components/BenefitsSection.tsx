
import DemoButton from "./DemoButton";

const BenefitsSection = () => {
  return (
    <section className="section bg-dark-base text-white" id="beneficios">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-white text-2xl sm:text-3xl md:text-4xl px-4 sm:px-0">📈 Por que empresas estão escolhendo a 7Bee.AI?</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
            Impacto mensurável em seu negócio desde o primeiro dia
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          <BenefitCard 
            title="+35% nas conversões nos 3 primeiros meses"
            description="Média de 35% de aumento em conversões nos primeiros 3 meses de implementação."
            emoji="🛍"
          />
          
          <BenefitCard 
            title="-60% nos custos operacionais"
            description="Economia de até 60% nos custos de atendimento e vendas em comparação com equipes tradicionais."
            emoji="💰"
          />
          
          <BenefitCard 
            title="Atendimento imediato, 24 horas por dia"
            description="Disponibilidade constante sem custos adicionais de hora extra ou plantões."
            emoji="⏱"
          />
          
          <BenefitCard 
            title="Zero tempo de espera"
            description="Atendimento instantâneo para cada cliente, eliminando abandono por demora."
            emoji="⚡"
          />
          
          <BenefitCard 
            title="Qualidade padronizada, sem depender de quem atende"
            description="Qualidade padronizada em todas as interações, independente do volume ou horário."
            emoji="🔄"
          />
          
          <BenefitCard 
            title="Escalabilidade imediata"
            description="Capacidade de atender de dezenas a milhares de clientes simultaneamente."
            emoji="📈"
          />
          
          <BenefitCard 
            title="Relatórios inteligentes com dados de comportamento do cliente"
            description="Análise completa de conversas e comportamento dos clientes para otimizar estratégias."
            emoji="🔍"
          />
          
          <BenefitCard 
            title="Integração completa com suas ferramentas"
            description="Conexão com sistemas CRM, ERP, WhatsApp Business e outras plataformas que você já utiliza."
            emoji="🧩"
          />
          
          <BenefitCard 
            title="Implementação em até 15 dias"
            description="Em produção em até 15 dias, sem necessidade de mudanças em sua infraestrutura atual."
            emoji="⚙️"
          />
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
          <DemoButton className="text-base sm:text-lg py-3 px-5 sm:py-4 sm:px-6 w-full sm:w-auto max-w-md" />
        </div>
      </div>
    </section>
  );
};

type BenefitCardProps = {
  title: string;
  description: string;
  emoji: string;
};

const BenefitCard = ({ title, description, emoji }: BenefitCardProps) => {
  return (
    <div className="bg-dark-base/50 border border-gray-700 p-4 sm:p-6 md:p-8 rounded-xl hover:border-primary/50 transition-colors">
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-shrink-0 mt-1">
          <span className="text-xl sm:text-2xl">{emoji}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm sm:text-base pl-8 sm:pl-10 md:pl-14">{description}</p>
    </div>
  );
};

export default BenefitsSection;
