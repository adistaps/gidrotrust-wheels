import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CarCard from './CarCard';
import { Button } from '@/components/ui/button';

const cars = [
  {
    name: 'Daihatsu Sigra',
    image: '/placeholder.svg',
    passengers: 6,
    luggage: 2,
    pricePerDay: 'Rp 250K',
    features: ['AC', 'Manual', 'BBM Irit'],
    transmission: 'Manual',
  },
  {
    name: 'Suzuki Ertiga',
    image: '/placeholder.svg',
    passengers: 7,
    luggage: 2,
    pricePerDay: 'Rp 350K',
    features: ['AC', 'Manual', 'Luas'],
    transmission: 'Manual',
  },
  {
    name: 'Toyota Avanza',
    image: '/placeholder.svg',
    passengers: 7,
    luggage: 2,
    pricePerDay: 'Rp 300K',
    features: ['AC', 'Manual', 'Populer'],
    transmission: 'Manual',
  },
  {
    name: 'Toyota Innova',
    image: '/placeholder.svg',
    passengers: 7,
    luggage: 3,
    pricePerDay: 'Rp 450K',
    features: ['AC', 'Matic', 'Premium'],
    transmission: 'Matic',
  },
];

const FleetSection = () => {
  return (
    <section id="fleet-section" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Harga Sewa Mobil <span className="text-primary">(Rp.X/Hari)</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih mobil sesuai kebutuhan Anda dengan harga transparan dan armada terawat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div key={car.name} className={`animate-fade-in stagger-${index + 1}`}>
              <CarCard {...car} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="btn-outline">
            <Link to="/price">
              Lihat Semua Armada
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
