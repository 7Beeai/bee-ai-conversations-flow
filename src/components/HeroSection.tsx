import DemoButton from "./DemoButton";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 md:pb-16 lg:pb-24 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-6 leading-tight font-extrabold text-center lg:text-left">
              Sua empresa precisa de{" "}
              <span className="text-primary block sm:inline">inteligência</span>.
              <br className="hidden sm:block" />
              <span className="block sm:inline">
                Nós entregamos{" "}
                <span className="text-primary">performance</span>.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-text mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
              Conversas humanizadas, com foco em vendas, atendimento e recuperação — adaptadas 100% à necessidade do seu negócio.
            </p>
            <div className="hidden md:flex justify-center lg:justify-start">
              <DemoButton className="text-base md:text-lg py-3 px-5 md:py-4 md:px-6 lg:py-6 lg:px-8" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-2 sm:mt-4 lg:mt-0 px-4 sm:px-0">
            <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
              {/* Placeholder for video - In production this would be replaced with actual video */}
              <div className="absolute inset-0 bg-dark-base/10 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] sm:border-t-[10px] sm:border-b-[10px] sm:border-l-[18px] border-transparent border-l-white ml-1 sm:ml-2"></div>
                </div>
              </div>
              <img src="https://source.unsplash.com/random/800x450/?business,presentation" alt="7Bee.AI em ação" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-4 sm:mt-6 px-4">
          <DemoButton className="text-base sm:text-lg py-3 px-5 sm:py-4 sm:px-6 w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
