import testimonial1 from "@/assets/testimonial-new-1.jpeg";
import testimonial2 from "@/assets/testimonial-new-2.jpeg";
import testimonial3 from "@/assets/testimonial-new-3.jpeg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Eu já tinha tentado várias vezes, mas sempre desistia. Com a consultoria, finalmente consegui constância e passei a entender meu corpo.",
      name: "Letícia",
      age: "18 anos",
      image: testimonial1,
    },
    {
      quote: "Nada de treino genérico. Tudo foi pensado para minha rotina, meus limites e meu momento.",
      name: "Amanda",
      age: "23 anos",
      image: testimonial2,
    },
    {
      quote: "Mais do que resultado físico, ganhei disciplina e autoestima.",
      name: "Kelly",
      age: "30 anos",
      image: testimonial3,
    },
  ];

  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <p className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">
            Resultados validados
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Mulheres reais, resultados reais
          </h2>
        </div>
      </div>
      
      {/* Scrolling Testimonials */}
      <div className="relative">
        <div className="flex animate-scroll-testimonials">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] mx-2 sm:mx-3"
            >
              <div className="relative h-[380px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <blockquote className="mb-4">
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{testimonial.name}</p>
                      <p className="text-xs text-white/70">{testimonial.age}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
