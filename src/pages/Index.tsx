
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Hero />
      <Events />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
