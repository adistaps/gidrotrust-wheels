import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const featuredCars = [
  {
    name: 'Toyota Innova Reborn',
    image: '/fleet/innova_reborn.png',
    category: 'MPV',
    capacity: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin',
    features: ['AC', 'Audio', 'Power Steering']
  },
  {
    name: 'Grand Inova',
    image: '/fleet/grand_innova.png',
    category: 'MPV',
    capacity: 7,
    transmission: 'Matic',
    fuel: 'Bensin',
    features: ['Premium Leather', 'Sunroof', 'Captain Seat']
  },
  {
    name: 'Avanza',
    image: '/fleet/avanza.png',
    category: 'MPV',
    capacity: 7,
    transmission: 'Manual',
    fuel: 'Bensin',
    features: ['AC', 'Audio', 'Reclining Seat']
  }
];

const FleetSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-10 reveal bg-to-top">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight uppercase">
            ARMADA UNGGULAN
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Kendaraan pilihan kami yang paling diminati untuk berbagai kebutuhan perjalanan.
          </p>
        </div>

        <div className="relative px-4 md:px-0 mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredCars.map((car, index) => (
                <CarouselItem key={car.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className={`stagger-${index + 1} h-full`}>
                    <CarCard {...car} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-white/10 bg-zinc-900/50 hover:bg-primary hover:text-black transition-colors" />
              <CarouselNext className="-right-12 border-white/10 bg-zinc-900/50 hover:bg-primary hover:text-black transition-colors" />
            </div>
          </Carousel>
        </div>

        <div className="text-center reveal bg-to-top stagger-4">
          <Link to="/price" className="btn-primary inline-flex items-center gap-2">
            Lihat Semua Armada
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
