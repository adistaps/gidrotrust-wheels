import { Link } from 'react-router-dom';
import { Calendar, Plane, Heart, Map, Package, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Calendar,
    title: 'Daily Rent',
    description: 'Sewa mobil harian dengan atau tanpa driver. Fleksibel sesuai kebutuhan Anda.',
  },
  {
    icon: Plane,
    title: 'Transfer In Out',
    description: 'Layanan antar jemput bandara, stasiun, dan terminal dengan tarif flat.',
  },
  {
    icon: Heart,
    title: 'Wedding Car',
    description: 'Mobil pengantin mewah dengan dekorasi dan driver berseragam.',
  },
  {
    icon: Map,
    title: 'Tour Package',
    description: 'Paket wisata all-in termasuk mobil, driver, BBM, dan parkir.',
  },
  {
    icon: Package,
    title: 'Moving Service',
    description: 'Layanan pindahan dengan box truck dan tenaga angkut profesional.',
  },
  {
    icon: Truck,
    title: 'Cargo Service',
    description: 'Pengiriman barang dan logistik dengan berbagai ukuran kendaraan.',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan transportasi untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card p-6 rounded-xl border border-border card-hover animate-fade-in stagger-${index + 1}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary text-sm font-medium hover:underline"
              >
                Selengkapnya
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
