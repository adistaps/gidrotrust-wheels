import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faPlane,
  faStar,
  faMapMarkerAlt,
  faBox,
  faTruck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: faCalendarDays,
    title: 'Daily Rent',
    description: 'Sewa mobil harian lepaskan kunci atau dengan driver profesional.',
  },
  {
    icon: faPlane,
    title: 'Transfer In Out',
    description: 'Antar jemput bandara, stasiun, dan terminal dengan tarif flat.',
  },
  {
    icon: faStar,
    title: 'Wedding Car',
    description: 'Mobil pengantin mewah dengan dekorasi eksklusif dan driver berseragam.',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Tour Package',
    description: 'Paket wisata kustom termasuk unit, driver, BBM, dan guide.',
  },
  {
    icon: faBox,
    title: 'Moving Service',
    description: 'Layanan pindahan rumah & kantor dengan armada box terjamin aman.',
  },
  {
    icon: faTruck,
    title: 'Cargo Service',
    description: 'Pengiriman barang logistik skala besar dengan manajemen waktu akurat.',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-10 reveal bg-to-top">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight uppercase">
            LAYANAN TERBAIK
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Solusi transportasi terpercaya untuk kenyamanan dan efisiensi perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "reveal bg-zinc-900/50 p-4 md:p-8 rounded-xl border border-white/10 transition-all hover:border-primary/40 group flex flex-col items-center text-center",
                `stagger-${(index % 3) + 1}`,
                "bg-to-top"
              )}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                <FontAwesomeIcon icon={service.icon} className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-inherit" />
              </div>

              <h3 className="font-heading font-bold text-sm md:text-xl mb-2 md:mb-3 uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">{service.description}</p>

              <Link
                to="/services"
                className="mt-auto inline-flex items-center text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase"
              >
                Detail
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
