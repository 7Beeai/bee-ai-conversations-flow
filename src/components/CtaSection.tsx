
import DemoButton from "./DemoButton";

const CtaSection = () => {
  return (
    <section className="section bg-primary bg-opacity-10">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-6">Pronto para revolucionar seu atendimento?</h2>
          <p className="text-secondary-text text-xl max-w-3xl mx-auto mb-10">
            Solicite uma demonstração gratuita hoje e veja como a 7Bee.AI pode transformar 
            seu negócio com conversas inteligentes e personalizadas.
          </p>
          
          <div className="inline-block animate-pulse-light mx-auto">
            <DemoButton className="text-lg py-6 px-8 mx-auto" />
          </div>
          
          <p className="mt-6 text-secondary-text">
            <span className="font-medium">Sem compromisso.</span> Conheça nossa tecnologia e decida se é o melhor para seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
