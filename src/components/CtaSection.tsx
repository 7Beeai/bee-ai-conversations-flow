import DemoButton from "./DemoButton";
const CtaSection = () => {
  return <section className="section bg-primary bg-opacity-10">
      <div className="container">
        <div className="text-center px-4 sm:px-0">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">Pronto para revolucionar seu atendimento?</h2>
          <p className="text-secondary-text text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10">Realize uma demonstração gratuita agora mesmo e veja como a 7Bee.AI pode transformar seu negócio com conversas inteligentes e personalizadas.</p>
          
          <div className="w-full sm:inline-block animate-pulse-light mx-auto">
            <DemoButton className="text-base sm:text-lg py-4 px-6 sm:py-6 sm:px-8 mx-auto w-full sm:w-auto max-w-md" />
          </div>
          
          <p className="mt-4 sm:mt-6 text-secondary-text text-sm sm:text-base">
            <span className="font-medium">Sem compromisso.</span> Conheça nossa tecnologia e decida se é o melhor para seu negócio.
          </p>
        </div>
      </div>
    </section>;
};
export default CtaSection;