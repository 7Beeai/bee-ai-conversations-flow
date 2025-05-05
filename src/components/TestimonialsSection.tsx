
const TestimonialsSection = () => {
  return (
    <section className="section bg-neutral-bg overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">O que nossos clientes dizem</h2>
          <p className="text-secondary-text text-xl max-w-3xl mx-auto">
            Empresários como você já transformaram seus negócios com a 7Bee.AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Implementamos a 7Bee.AI há 3 meses e já vimos um aumento de 42% nas conversões do nosso site. A naturalidade das conversas é impressionante."
            author="Carlos Mendes"
            company="CEO, TechSolutions"
            imageUrl="https://source.unsplash.com/random/100x100/?man,business"
          />
          
          <TestimonialCard 
            quote="Nossa equipe de vendas agora se concentra apenas em leads qualificados, enquanto a 7Bee.AI cuida da triagem inicial. Otimizamos nosso time em 40%."
            author="Ana Ferreira"
            company="Diretora Comercial, InnovateRetail"
            imageUrl="https://source.unsplash.com/random/100x100/?woman,business"
          />
          
          <TestimonialCard 
            quote="Conseguimos escalar nosso atendimento de 200 para 2.000 clientes por dia sem contratar uma pessoa a mais. O ROI é simplesmente extraordinário."
            author="Roberto Santos"
            company="Fundador, E-commerce Express"
            imageUrl="https://source.unsplash.com/random/100x100/?man,executive"
          />
        </div>
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  quote: string;
  author: string;
  company: string;
  imageUrl: string;
};

const TestimonialCard = ({ quote, author, company, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      
      <blockquote className="mb-6 text-lg">"{quote}"</blockquote>
      
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={author}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-secondary-text text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
