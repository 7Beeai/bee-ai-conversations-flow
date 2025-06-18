
import { ArrowRight } from "lucide-react";
import DemoButton from "./DemoButton";

const HowItWorksSection = () => {
  return (
    <section className="section bg-white" id="como-funciona">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4 sm:px-0">Como funciona a demonstração</h2>
          <p className="text-secondary-text text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
            Um processo simples para você experimentar o poder da nossa tecnologia em poucos minutos
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          <StepCard 
            number="01"
            title="Inicie a conversa"
            description="Clique no botão e comece agora mesmo"
          />
          
          <StepCard 
            number="02"
            title="Experimente a interação"
            description="Converse com nossa IA e veja como ela entende contexto e responde naturalmente"
          />
          
          <StepCard 
            number="03"
            title="Conheça os recursos"
            description="Explore recursos avançados que se moldam ao seu negócio"
          />
          
          <StepCard 
            number="04"
            title="Agende próximos passos"
            description="Agende uma conversa real com nosso time, sem compromisso"
          />
        </div>
        
        <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
          <p className="text-secondary-text mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Não perca tempo com soluções que não entendem seu negócio. 
            Experimente uma abordagem verdadeiramente inteligente.
          </p>
          <DemoButton className="text-base sm:text-lg py-4 px-6 sm:py-6 sm:px-8 w-full sm:w-auto max-w-md" />
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
    <div className="bg-neutral-bg p-4 sm:p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow relative">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-primary text-white font-bold text-lg sm:text-xl w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          {number}
        </div>
        {number !== "04" && (
          <div className="hidden lg:block absolute -right-4 top-8 sm:top-10 z-10">
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
      <p className="text-secondary-text text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default HowItWorksSection;
