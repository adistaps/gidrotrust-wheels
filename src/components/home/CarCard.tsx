import { Users, Briefcase, Fuel, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarCardProps {
  name: string;
  image: string;
  passengers: number;
  luggage: number;
  pricePerDay: string;
  features: string[];
  transmission: string;
}

const CarCard = ({ name, image, passengers, luggage, pricePerDay, features, transmission }: CarCardProps) => {
  const whatsappUrl = `https://wa.me/6281227722211?text=${encodeURIComponent(`Halo, saya ingin memesan ${name}. Mohon info lebih lanjut.`)}`;

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg card-hover border border-border">
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
          {transmission}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg mb-3">{name}</h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <span>{passengers} Orang</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{luggage} Koper</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-heading font-bold text-primary">{pricePerDay}</span>
          <span className="text-muted-foreground text-sm">/hari</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {features.map((feature, index) => (
            <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
              ✓ {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button asChild className="w-full btn-primary">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Pesan Sekarang
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
