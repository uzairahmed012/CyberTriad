import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ImpactSection from './sections/ImpactSection';
import SolutionsSection from './sections/SolutionsSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="font-roboto">
        <HeroSection />
        <ServicesSection />
        <ImpactSection />
        <SolutionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
