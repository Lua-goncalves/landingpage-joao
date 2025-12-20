import { Button } from "@/components/ui/button";
import { handleCTAClick } from "@/lib/tracking";

const CTASection = () => {
  const handleCTA = () => {
    handleCTAClick('cta_section');
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 relative">
      {/* Dark overlay for more contrast */}
      <div className="absolute inset-0 bg-background/40" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
            Está pronta para transformar seu{" "}
            <span className="text-accent font-black">glúteo e coxas</span>?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
            Se você busca um treino que vai te fazer evoluir de verdade, 
            esse método é o que faltava para você dar o próximo passo.
          </p>
          
          <Button
            id="cta-final-whatsapp"
            variant="cta"
            size="xl"
            onClick={handleCTA}
            className="w-full sm:w-auto shadow-xl shadow-primary/40"
            data-tracking="whatsapp-click"
          >
            QUERO GARANTIR MINHA VAGA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
