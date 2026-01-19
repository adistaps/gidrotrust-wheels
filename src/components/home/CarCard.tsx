import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBriefcase, faGasPump, faGear } from '@fortawesome/free-solid-svg-icons';

interface CarCardProps {
  name: string;
  image: string;
  category: string;
  capacity: number;
  transmission: string;
  fuel: string;
  features: string[];
}

const CarCard = ({ name, image, category, capacity, transmission, fuel, features }: CarCardProps) => {
  return (
    <div className="bg-zinc-900/50 rounded-2xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-300 group flex flex-col h-full">
      <div className="aspect-video bg-zinc-800 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6 flex-grow flex flex-col">
        <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-4 group-hover:text-primary transition-colors uppercase tracking-wide">
          {name}
        </h3>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-primary" />
            <span>{capacity} Seat</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 text-primary" />
            <span className="truncate">{transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <FontAwesomeIcon icon={faGasPump} className="w-4 h-4 text-primary" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <FontAwesomeIcon icon={faGear} className="w-4 h-4 text-primary" />
            <span className="truncate">{features[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
