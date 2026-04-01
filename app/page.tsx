import Facilities from '@/components/Facilities';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ReviewsSection from '@/components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <Facilities />
      <ReviewsSection />
    </main>
  );
}
