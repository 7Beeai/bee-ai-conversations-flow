import DemoButton from "./DemoButton";
const HeroSection = () => {
  return <section className="pt-32 pb-16 md:pb-24 md:pt-40 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl mb-6 leading-tight md:text-5xl font-extrabold text-left lg:text-6xl">
              Seu time precisa de <span className="text-primary">inteligência</span>. A gente entrega.
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-8 max-w-xl mx-auto lg:mx-0">
              Conversas naturais, personalizadas, voltadas para resultado — 100% adaptadas ao seu negócio.
            </p>
            <DemoButton className="text-lg py-6 px-8" />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
              {/* Placeholder for video - In production this would be replaced with actual video */}
              <div className="absolute inset-0 bg-dark-base/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-white ml-2"></div>
                </div>
              </div>
              <img src="https://source.unsplash.com/random/800x450/?business,presentation" alt="7Bee.AI em ação" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;