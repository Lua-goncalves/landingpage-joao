import { Button } from "@/components/ui/button";
import { handleCTAClick } from "@/lib/tracking";

const BenefitsSection = () => {
  const benefits = [
    "Treino específico para crescer glúteo e coxa",
    "Uma dieta sugestiva para acelerar seus resultados",
    "Nada de perder tempo na academia com técnicas sem sentido",
    "Sua autoestima de volta",
    "Usar aquela roupa que você sentia vergonha de usar",
  ];

  const handleCTA = () => {
    handleCTAClick('benefits_section');
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center">
            <div className="space-y-3 md:space-y-4">
              <p className="text-accent font-bold uppercase tracking-wider text-xs sm:text-sm">
                Para quem é
              </p>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                O que você vai conquistar com o método
              </h2>
            </div>
            
            <div className="flex flex-col gap-3 md:gap-4 text-left max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                id="cta-benefits-whatsapp"
                variant="cta" 
                size="lg"
                onClick={handleCTA}
                className="w-full sm:w-auto"
                data-tracking="whatsapp-click"
              >
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
