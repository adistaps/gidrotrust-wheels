import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FleetSection from '@/components/home/FleetSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import MapSection from '@/components/home/MapSection';
import CarTypesSection from '@/components/home/CarTypesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FleetSection />
      <StatsSection />
      <ServicesSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <CarTypesSection />
      <MapSection />
    </Layout>
  );
};

export default Index;
