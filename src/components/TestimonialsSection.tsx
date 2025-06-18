
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "A 7Bee.AI transformou completamente nosso atendimento. Agora conseguimos responder 24/7 com qualidade.",
    author: "João Silva",
    company: "Clínica Vida",
    imageUrl: "https://source.unsplash.com/random/100x100/?doctor,man"
  }, {
    quote: "Impressionante como a IA consegue ser tão natural nas conversas. Nossos pacientes adoram!",
    author: "Maria Santos",
    company: "Centro Médico Excellence",
    imageUrl: "https://source.unsplash.com/random/100x100/?doctor,woman"
  }, {
    quote: "O agendamento automático economizou horas da nossa equipe. Recomendo para qualquer clínica.",
    author: "Dr. Carlos Lima",
    company: "Ortopedia Moderna",
    imageUrl: "https://source.unsplash.com/random/100x100/?doctor,professional"
  }];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como a 7Bee.AI tem transformado clínicas e consultórios em todo o Brasil
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              imageUrl={testimonial.imageUrl}
            />
          ))}
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

const TestimonialCard = ({
  quote,
  author,
  company,
  imageUrl
}: TestimonialCardProps) => {
  return <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4 sm:mb-6">
        {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>)}
      </div>
      
      <blockquote className="mb-4 sm:mb-6 text-base sm:text-lg">"{quote}"</blockquote>
      
      <div className="flex items-center">
        <img src={imageUrl} alt={author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4" />
        <div>
          <p className="font-bold text-sm sm:text-base">{author}</p>
          <p className="text-secondary-text text-xs sm:text-sm">{company}</p>
        </div>
      </div>
    </div>;
};

export default TestimonialsSection;
