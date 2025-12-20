import heroBg from "@/assets/hero-bg.jpeg";
import { Button } from "@/components/ui/button";
import { handleCTAClick } from "@/lib/tracking";

const HeroSection = () => {
  const handleCTA = () => {
    handleCTAClick('hero_section');
  };

  return (
    <section className="min-h-[100svh] flex flex-col relative">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for better text readability - increased darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/95" />

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in-up opacity-0">
              <h1 className="text-[1.65rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold sm:leading-[1.15] drop-shadow-lg">
                Treino de Musa<br />
                <span className="text-foreground">O método </span>
                <span className="text-accent font-black">+ Glúteo</span>
                <span className="text-foreground"> </span>
                <span className="text-accent font-black">+ Coxas</span>
                <span className="text-foreground"> e </span>
                <span className="text-accent font-black">– Gordura</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0 font-medium">
                Um treino feito pra você ganhar glúteo e coxas e eliminar gordura, sem fazer você perder tempo na academia.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="animate-fade-in-up opacity-0 delay-100 pt-2 px-2 sm:px-0">
              <Button 
                id="cta-hero-whatsapp"
                variant="cta" 
                size="lg"
                onClick={handleCTA}
                className="w-full sm:w-auto sm:px-10 md:px-12 text-sm sm:text-base"
                data-tracking="whatsapp-click"
              >
                QUERO TRANSFORMAR MEU CORPO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="bg-primary py-2.5 sm:py-3 md:py-4 overflow-hidden relative z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-primary-foreground font-bold text-[10px] sm:text-xs md:text-sm tracking-wider mx-3 sm:mx-4 md:mx-6">
              • CONSULTORIA PREMIUM • ACOMPANHAMENTO PERSONALIZADO
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
