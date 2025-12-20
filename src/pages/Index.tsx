import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { usePageTracking } from "@/hooks/usePageTracking";

const Index = () => {
  // Track PageView on page load - ready for Meta/Google pixels
  usePageTracking('Landing Page - João Boyago');

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
