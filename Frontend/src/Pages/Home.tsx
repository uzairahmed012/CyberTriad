import HeroSection from '../sections/home/HeroSection';
import ServicesSection from '../sections/home/ServicesSection';
import ImpactSection from '../sections/home/ImpactSection';
import SolutionsSection from '../sections/home/SolutionsSection';
import CTASection from '../sections/shared/CTASection';

export default function Home() {
  return (
    <main className="font-roboto">
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <SolutionsSection />
      <CTASection />
    </main>
  );
}
