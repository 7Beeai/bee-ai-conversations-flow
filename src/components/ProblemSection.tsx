
import { MessageSquare, X } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section bg-white" id="problemas">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Você reconhece esses problemas?</h2>
          <p className="text-secondary-text text-xl max-w-3xl mx-auto">
            Atendimentos robóticos estão prejudicando suas vendas, relacionamento com clientes e a reputação da sua marca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProblemCard 
            title="Chatbots Impessoais"
            description="Scripts engessados que parecem robôs e frustram seus clientes, gerando abandono na jornada de compra."
            icon={<MessageSquare className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="Equipe Sobrecarregada"
            description="Atendentes humanos esgotados respondendo as mesmas perguntas, quando poderiam focar em demandas estratégicas."
            icon={<X className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="Oportunidades Perdidas"
            description="Leads não qualificados, follow-ups inconsistentes e falhas na conversão por falta de personalização."
            icon={<X className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="Alta Rotatividade"
            description="Dificuldade em manter equipes de vendas e suporte, impactando diretamente na experiência do cliente."
            icon={<X className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="Custos Crescentes"
            description="Expansão constante do time sem ganho proporcional em vendas, reduzindo suas margens de lucro."
            icon={<X className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="Experiência Inconsistente"
            description="Qualidade do atendimento varia conforme o atendente, criando experiências desiguais para seus clientes."
            icon={<MessageSquare className="h-8 w-8 text-red-500" />}
          />
        </div>
      </div>
    </section>
  );
};

type ProblemCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ProblemCard = ({ title, description, icon }: ProblemCardProps) => {
  return (
    <div className="bg-neutral-bg p-8 rounded-xl hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
  );
};

export default ProblemSection;
