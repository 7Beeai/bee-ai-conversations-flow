
import { ArrowRight } from "lucide-react";
import DemoButton from "./DemoButton";

const HowItWorksSection = () => {
  return (
    <section className="section bg-white" id="como-funciona">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Como funciona a demonstração</h2>
          <p className="text-secondary-text text-xl max-w-3xl mx-auto">
            Um processo simples para você experimentar o poder da nossa tecnologia em poucos minutos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard 
            number="01"
            title="Clique no botão e comece agora mesmo"
            description="Inicie uma demonstração imediata da nossa tecnologia de IA conversacional"
          />
          
          <StepCard 
            number="02"
            title="Converse com nossa IA e veja como ela entende contexto e responde naturalmente"
            description="Experimente interações que parecem verdadeiramente humanas e contextualizadas"
          />
          
          <StepCard 
            number="03"
            title="Explore recursos avançados que se moldam ao seu negócio"
            description="Descubra como nossa solução se adapta especificamente às necessidades da sua empresa"
          />
          
          <StepCard 
            number="04"
            title="Agende uma conversa real com nosso time, sem compromisso"
            description="Marque uma reunião personalizada para discutir implementação e próximos passos"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-secondary-text mb-8 text-lg max-w-2xl mx-auto">
            Não perca tempo com soluções que não entendem seu negócio. 
            Experimente uma abordagem verdadeiramente inteligente.
          </p>
          <DemoButton className="text-lg py-6 px-8" />
        </div>
      </div>
    </section>
  );
};

type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="bg-neutral-bg p-8 rounded-xl hover:shadow-lg transition-shadow relative">
      <div className="flex items-center mb-6">
        <div className="bg-primary text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
          {number}
        </div>
        {number !== "04" && (
          <div className="hidden lg:block absolute -right-4 top-10 z-10">
            <ArrowRight className="h-6 w-6 text-primary" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
  );
};

export default HowItWorksSection;
