
import DemoButton from "./DemoButton";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-8 md:pt-24 lg:pt-32 pb-8 md:pb-24 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight font-extrabold text-center lg:text-left lg:text-6xl">
              Sua empresa precisa de <span className="text-primary">inteligência</span>.<br />
              Nós entregamos <span className="text-primary">performance</span>.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Conversas naturais, personalizadas, voltadas para resultado — 100% adaptadas ao seu negócio.
            </p>
            <div className="hidden md:flex justify-center lg:justify-start">
              <DemoButton className="text-lg py-4 px-6 md:py-6 md:px-8" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
              {/* Placeholder for video - In production this would be replaced with actual video */}
              <div className="absolute inset-0 bg-dark-base/10 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-white ml-2"></div>
                </div>
              </div>
              <img src="https://source.unsplash.com/random/800x450/?business,presentation" alt="7Bee.AI em ação" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-4">
          <DemoButton className="text-lg py-4 px-6 w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
