import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatWeCleanSection from "@/components/WhatWeCleanSection";
import ProcessSection from "@/components/ProcessSection";
import CallToActionSection from "@/components/CallToActionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <ProcessSection />
      <WhatWeCleanSection />
      <ServicesSection />
      <CallToActionSection />
      <TestimonialsSection />
      <QuoteSection />
    </main>
  );
}