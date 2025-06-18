
import { MessageCircle, Users, DollarSign, RotateCcw, TrendingDown, Dice6 } from "lucide-react";
import DemoButton from "./DemoButton";

const ProblemSection = () => {
  return (
    <section className="section bg-white" id="problemas">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">😓 Você enfrenta isso no seu dia a dia?</h2>
          <p className="text-secondary-text text-xl max-w-3xl mx-auto">
            Esses problemas estão prejudicando suas vendas, relacionamento com clientes e a reputação da sua marca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProblemCard 
            title="🤖 Chatbots frios e impessoais afastando clientes"
            description="Interações robotizadas que frustram seus clientes e prejudicam a experiência de compra."
            icon={<MessageCircle className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="⏳ Equipes sobrecarregadas respondendo sempre as mesmas perguntas"
            description="Atendentes esgotados com tarefas repetitivas, quando poderiam focar em demandas estratégicas."
            icon={<Users className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="💸 Leads perdidos por falta de follow-up automatizado e qualificado"
            description="Oportunidades desperdiçadas por falhas na qualificação e acompanhamento de prospects."
            icon={<DollarSign className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="🔁 Alta rotatividade de vendedores e atendentes"
            description="Dificuldade em manter equipes estáveis, impactando diretamente na experiência do cliente."
            icon={<RotateCcw className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="📉 Crescimento de equipe sem aumento proporcional nas vendas"
            description="Expansão constante do time sem ganho proporcional em resultados, reduzindo suas margens."
            icon={<TrendingDown className="h-8 w-8 text-red-500" />}
          />
          
          <ProblemCard 
            title="🎲 Atendimento que muda de acordo com o humor do atendente"
            description="Qualidade inconsistente do atendimento, criando experiências desiguais para seus clientes."
            icon={<Dice6 className="h-8 w-8 text-red-500" />}
          />
        </div>

        <div className="mt-12 text-center">
          <DemoButton className="text-lg py-4 px-6">
            👉 Veja na prática como a 7Bee.AI resolve isso
          </DemoButton>
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
