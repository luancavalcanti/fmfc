import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <QuoteSection />
    </main>
  );
}