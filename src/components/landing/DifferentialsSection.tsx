const DifferentialsSection = () => {
  const differentials = [
    "Validado e utilizado com todas as minhas alunas",
    "Nada de estratégias que te fazem se matar na academia sem sentido",
    "Feito para mudar sua vida",
    "Elaborado com base na ciência",
    "Quem fez, 100% aprova e recomenda",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 md:mb-4">
            Diferencial
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            Por que esse método é diferente?
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-left max-w-xl mx-auto">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card/50 border border-border/30"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-xs sm:text-sm">{index + 1}</span>
                </div>
                <span className="text-base sm:text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
