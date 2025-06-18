
import { TrendingUp, Clock, CalendarClock, Zap, UserCheck, Scale, BarChart3, Database, Rocket } from "lucide-react";
import DemoButton from "./DemoButton";

const BenefitsSection = () => {
  return (
    <section className="section bg-dark-base text-white" id="beneficios">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">📈 Por que empresas estão escolhendo a 7Bee.AI?</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Impacto mensurável em seu negócio desde o primeiro dia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            title="🛍 +35% nas conversões nos 3 primeiros meses"
            description="Média de 35% de aumento em conversões nos primeiros 3 meses de implementação."
            icon={<TrendingUp className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="💰 -60% nos custos operacionais"
            description="Economia de até 60% nos custos de atendimento e vendas em comparação com equipes tradicionais."
            icon={<Scale className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="⏱ Atendimento imediato, 24 horas por dia"
            description="Disponibilidade constante sem custos adicionais de hora extra ou plantões."
            icon={<Clock className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="Zero tempo de espera"
            description="Atendimento instantâneo para cada cliente, eliminando abandono por demora."
            icon={<Zap className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="🔄 Qualidade padronizada, sem depender de quem atende"
            description="Qualidade padronizada em todas as interações, independente do volume ou horário."
            icon={<UserCheck className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="Escalabilidade imediata"
            description="Capacidade de atender de dezenas a milhares de clientes simultaneamente."
            icon={<BarChart3 className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="🔍 Relatórios inteligentes com dados de comportamento do cliente"
            description="Análise completa de conversas e comportamento dos clientes para otimizar estratégias."
            icon={<Database className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="🧩 Integração completa com suas ferramentas"
            description="Conexão com sistemas CRM, ERP, WhatsApp Business e outras plataformas que você já utiliza."
            icon={<CalendarClock className="h-5 w-5 text-white" />}
          />
          
          <BenefitCard 
            title="⚙️ Implementação em até 15 dias"
            description="Em produção em até 15 dias, sem necessidade de mudanças em sua infraestrutura atual."
            icon={<Rocket className="h-5 w-5 text-white" />}
          />
        </div>

        <div className="mt-12 text-center">
          <DemoButton className="text-lg py-4 px-6" />
        </div>
      </div>
    </section>
  );
};

type BenefitCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="bg-dark-base/50 border border-gray-700 p-8 rounded-xl hover:border-primary/50 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 mt-1">
          <div className="bg-primary rounded-full p-1">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 pl-10">{description}</p>
    </div>
  );
};

export default BenefitsSection;
