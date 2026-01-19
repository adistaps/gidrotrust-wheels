import Layout from '@/components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faPlane,
  faStar,
  faMapMarkerAlt,
  faBox,
  faTruck,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const WHATSAPP_URL = 'https://wa.me/6282221568423?text=Halo%20Gidrotrust%20Trans,%20saya%20ingin%20memesan%20mobil.%20Mohon%20info%20lebih%20lanjut.';

const services = [
  {
    icon: faCalendarDays,
    title: 'Daily Rent',
    description: 'Sewa mobil harian dengan pilihan lepas kunci atau bersama driver profesional.',
    features: [
      'Gratis antar jemput dalam kota',
      'Asuransi kendaraan',
      'BBM sudah termasuk (dengan driver)',
      '24/7 customer support',
      'Unit terawat dan bersih'
    ]
  },
  {
    icon: faPlane,
    title: 'Transfer In Out',
    description: 'Layanan antar jemput bandara, stasiun, dan terminal dengan harga tetap.',
    features: [
      'Tarif flat tanpa meter',
      'Driver berpengalaman',
      'Meet & greet service',
      'Pantau jadwal penerbangan',
      'Gratis waiting time 30 menit'
    ]
  },
  {
    icon: faStar,
    title: 'Wedding Car',
    description: 'Mobil pengantin mewah dengan dekorasi eksklusif untuk hari spesial Anda.',
    features: [
      'Mobil premium (Alphard/Fortuner)',
      'Dekorasi bunga fresh',
      'Driver berseragam rapi',
      'Dokumentasi (optional)',
      'Konsultasi gratis'
    ]
  },
  {
    icon: faMapMarkerAlt,
    title: 'Tour Package',
    description: 'Paket wisata custom mencakup unit, driver, BBM, dan tour guide.',
    features: [
      'Itinerary fleksibel',
      'Driver sekaligus guide lokal',
      'Rekomendasi tempat wisata',
      'BBM & parkir termasuk',
      'Harga group special'
    ]
  },
  {
    icon: faBox,
    title: 'Moving Service',
    description: 'Layanan pindahan rumah atau kantor dengan armada box yang aman.',
    features: [
      'Helper tersedia',
      'Armada box berbagai ukuran',
      'Packing material (optional)',
      'Asuransi barang',
      'Same day service'
    ]
  },
  {
    icon: faTruck,
    title: 'Cargo Service',
    description: 'Pengiriman barang logistik skala besar dengan manajemen waktu akurat.',
    features: [
      'Tracking real-time',
      'Door to door service',
      'Loading & unloading',
      'Surat jalan resmi',
      'Pengiriman antar kota'
    ]
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black">
        <div className="container-custom py-20 md:py-32">
          {/* Unified Page Title Style */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              SERVICES SECTION
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Solusi transportasi terpadu untuk berbagai kebutuhan perjalanan Anda, mulai dari harian hingga pengiriman kargo.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`reveal bg-zinc-900/50 p-4 md:p-8 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-zinc-900/80 transition-all duration-300 stagger-${(index % 3) + 1} bg-to-top flex flex-col items-center text-center`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <FontAwesomeIcon icon={service.icon} className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-base md:text-2xl text-white mb-2 md:mb-3 uppercase tracking-widest">{service.title}</h3>
                <p className="text-gray-400 text-[10px] md:text-sm mb-4 md:mb-8 leading-relaxed flex-grow line-clamp-2 md:line-clamp-none">{service.description}</p>

                <div className="hidden md:block space-y-3 mb-8 w-full text-left">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex items-center justify-center h-10 md:h-12 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                >
                  Pesan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;