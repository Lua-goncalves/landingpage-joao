import joaoImage from "@/assets/about-joao.webp";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 sm:w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden">
                <img
                  src={joaoImage}
                  alt="João Boyago"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-5 md:space-y-6 text-center lg:text-left">
            <p className="text-accent font-bold uppercase tracking-wider text-xs sm:text-sm">
              Quem vai te acompanhar
            </p>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              João Víctor Boyago
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Consultor especializado em treinamento feminino, com experiência prática 
              ajudando mulheres a alcançarem resultados reais por meio de um método próprio, 
              sem perder tempo na academia e sem loucura na dieta.
            </p>

            <div className="space-y-3 pt-2 md:pt-4 inline-block lg:block text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm sm:text-base text-foreground">Treino correto sem fazer você perder tempo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm sm:text-base text-foreground">Uma dieta sugestiva, podendo comer um doce por dia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm sm:text-base text-foreground">Recuperar sua autoestima</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
