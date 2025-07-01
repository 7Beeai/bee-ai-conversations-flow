
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Conteúdo principal em grid responsivo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 lg:mb-12">
            {/* Texto principal */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 leading-tight font-extrabold">
                Sua empresa precisa de <span className="text-primary">inteligência</span>.<br />
                Nós entregamos <span className="text-primary">performance</span>.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-text mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Conversas humanizadas, com foco em vendas, atendimento e recuperação — adaptadas 100% à necessidade do seu negócio.
              </p>
            </div>
            
            {/* Vídeo */}
            <div className="order-2 lg:order-2">
              <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden max-w-lg mx-auto lg:max-w-none">
                <iframe
                  src="https://player.vimeo.com/video/1094542788?h=a2db4ef548&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  className="absolute inset-0 w-full h-full"
                  title="7Bee AI"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          
          {/* Formulário centralizado */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
