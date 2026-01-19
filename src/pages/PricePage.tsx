import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faBriefcase, faChevronDown, faChevronUp, faCheckCircle, faMessage } from '@fortawesome/free-solid-svg-icons';

const WHATSAPP_NUMBER = '6282221568423';

const cars = [
  {
    category: 'MPV',
    items: [
      {
        name: 'All New Avanza',
        capacity: '6-7 orang',
        type: 'Manual/Matic',
        prices: { h12: 'Rp 250.000', h24Lepas: 'Rp 300.000', h24Driver: 'Rp 400.000' },
        image: '/fleet/avanza.png',
        features: ['AC', 'Audio', 'Power Steering', 'Airbag']
      },
      {
        name: 'Grand Innova',
        capacity: '6-7 orang',
        type: 'Manual/Matic',
        prices: { h12: 'Rp 300.000', h24Lepas: 'Rp 350.000', h24Driver: 'Rp 450.000' },
        image: '/fleet/grand_innova.png',
        features: ['AC', 'Audio', 'Power Steering', 'Airbag', 'ABS']
      },
      {
        name: 'Innova Reborn',
        capacity: '6-7 orang',
        type: 'Manual/Matic',
        prices: { h12: 'Rp 350.000', h24Lepas: 'Rp 400.000', h24Driver: 'Rp 500.000' },
        image: '/fleet/innova_reborn.png',
        features: ['AC', 'Audio', 'Power Steering', 'Airbag', 'ABS', 'Cruise Control']
      },
      {
        name: 'Innova Zenix',
        capacity: '6-7 orang',
        type: 'Hybrid Matic',
        prices: { h12: 'Rp 450.000', h24Lepas: 'Rp 550.000', h24Driver: 'Rp 650.000' },
        features: ['AC Digital', 'Premium Audio', 'Leather Seat', 'Airbag', 'ABS', 'Cruise Control', 'Hybrid Engine']
      }
    ]
  },
  {
    category: 'Luxury',
    items: [
      {
        name: 'Alphard Transformer',
        capacity: '6-7 orang',
        type: 'Matic',
        prices: { h12: 'Rp 1.200.000', h24Lepas: '-', h24Driver: 'Rp 2.000.000' },
        features: ['Premium Leather', 'Luxury Audio', 'Captain Seat', 'Sunroof', 'Full Airbag', 'Advanced Safety']
      }
    ]
  },
  {
    category: 'SUV',
    items: [
      {
        name: 'Toyota Fortuner VRZ',
        capacity: '6-7 orang',
        type: 'Matic',
        prices: { h12: 'Rp 500.000', h24Lepas: 'Rp 600.000', h24Driver: 'Rp 750.000' },
        features: ['AC', 'Audio Premium', 'Leather Seat', '4WD', 'Full Airbag', 'Hill Assist']
      },
      {
        name: 'Mitsubishi Pajero',
        capacity: '6-7 orang',
        type: 'Matic',
        prices: { h12: 'Rp 550.000', h24Lepas: 'Rp 650.000', h24Driver: 'Rp 800.000' },
        features: ['AC', 'Audio Premium', 'Leather Seat', '4WD', 'Full Airbag', 'Cruise Control']
      }
    ]
  },
  {
    category: 'Minibus',
    items: [
      {
        name: 'Toyota Hiace Commuter',
        capacity: '14-16 orang',
        type: 'Manual',
        prices: { h12: 'Rp 600.000', h24Lepas: '-', h24Driver: 'Rp 900.000' },
        features: ['AC', 'Audio', 'Reclining Seat', 'Overhead Storage']
      },
      {
        name: 'Toyota Hiace Premio',
        capacity: '9-12 orang',
        type: 'Matic',
        prices: { h12: 'Rp 700.000', h24Lepas: '-', h24Driver: 'Rp 1.000.000' },
        features: ['AC Premium', 'Captain Seat', 'Premium Audio', 'Luxury Interior']
      },
      {
        name: 'Isuzu Elf Long',
        capacity: '16-19 orang',
        type: 'Manual',
        prices: { h12: 'Rp 650.000', h24Lepas: '-', h24Driver: 'Rp 950.000' },
        features: ['AC', 'Audio', 'Reclining Seat', 'Overhead Storage', 'Extra Legroom']
      }
    ]
  },
  {
    category: 'Bus',
    items: [
      {
        name: 'Medium Bus',
        capacity: '25-30 orang',
        type: 'Manual/Matic',
        prices: { h12: 'Rp 1.000.000', h24Lepas: '-', h24Driver: 'Rp 1.500.000' },
        features: ['AC', 'Audio/Video', 'Reclining Seat', 'Toilet', 'Overhead Storage']
      },
      {
        name: 'Big Bus SHD',
        capacity: '45-50 orang',
        type: 'Matic',
        prices: { h12: 'Rp 1.500.000', h24Lepas: '-', h24Driver: 'Rp 2.500.000' },
        features: ['AC Premium', 'Entertainment System', 'Reclining Seat', 'Toilet', 'Karaoke', 'LED TV']
      }
    ]
  }
];

const PriceCard = ({ car, category, getWhatsappLink }: { car: any, category: string, getWhatsappLink: (name: string) => string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-zinc-900/50 rounded-2xl border border-white/10 overflow-hidden transition-all hover:border-primary/40 flex flex-col group/card"
    >
      {/* Vehicle Image */}
      <div className="aspect-video bg-zinc-800 relative group overflow-hidden">
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon icon={faBriefcase} size="3x" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-black text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter">
            {category}
          </span>
        </div>
      </div>

      <div className="p-3.5 md:p-6 flex-grow flex flex-col">
        <h3 className="font-heading font-bold text-sm md:text-xl text-white mb-3 md:mb-4 uppercase tracking-wide group-hover/card:text-primary transition-colors line-clamp-1">{car.name}</h3>

        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="flex items-center gap-1.5 md:gap-2 text-gray-400 text-[10px] md:text-sm">
            <FontAwesomeIcon icon={faUsers} className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="truncate">{car.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-gray-400 text-[10px] md:text-sm">
            <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="truncate">{car.type}</span>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3 mt-auto">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="btn-outline w-full justify-between h-9 md:h-11 px-2 md:px-4 text-[9px] md:text-xs"
          >
            <span className="truncate">Detail Harga</span>
            <FontAwesomeIcon
              icon={isExpanded ? faChevronUp : faChevronDown}
              className="w-2.5 h-2.5 md:w-3 md:h-3"
            />
          </Button>

          <a
            href={getWhatsappLink(car.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full h-9 md:h-11 text-[10px] md:text-xs flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faMessage as any} className="w-3 h-3 md:w-4 md:h-4" />
            Pesan
          </a>
        </div>

        {isExpanded && (
          <div className="mt-6 space-y-4 pt-6 border-t border-white/10 animate-fade-in text-sm">
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">12 Jam</p>
                <p className="text-primary font-heading font-bold">{car.prices.h12}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">24 Jam (Lepas Kunci)</p>
                <p className="text-primary font-heading font-bold">{car.prices.h24Lepas}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">24 Jam (Dengan Driver)</p>
                <p className="text-primary font-heading font-bold">{car.prices.h24Driver}</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-widest font-bold">Fasilitas:</p>
              <div className="grid grid-cols-2 gap-2">
                {car.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle as any} className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-[11px] text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PricePage = () => {

  const getWhatsappLink = (carName: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Gidrotrust%20Trans,%20saya%20ingin%20tanya%20sewa%20mobil%20${encodeURIComponent(carName)}`;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black">
        <div className="container-custom py-20 md:py-32">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              DAFTAR HARGA
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Harga sewa kendaraan transparan dan kompetitif untuk berbagai kebutuhan perjalanan Anda.
            </p>
          </div>

          <div className="space-y-16">
            {cars.map((category, catIdx) => (
              <div key={category.category} className="reveal bg-to-top">
                <h2 className="text-2xl font-heading font-bold text-white mb-8 uppercase border-l-4 border-primary pl-4 tracking-widest">
                  {category.category}
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start">
                  {category.items.map((car, idx) => (
                    <PriceCard
                      key={car.name}
                      car={car}
                      category={category.category}
                      getWhatsappLink={getWhatsappLink}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-zinc-900/30 rounded-3xl border border-white/10 text-center">
            <p className="text-sm text-gray-500">
              *Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terbaru dan promo spesial.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricePage;