import Layout from '@/components/layout/Layout';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { Calendar, Plane, Heart, Map, Package, Truck, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { icon: Calendar, title: 'Daily Rent', description: 'Layanan sewa mobil harian dengan fleksibilitas tinggi. Tersedia pilihan lepas kunci atau dengan driver profesional.', features: ['Armada terawat', 'Driver opsional', 'Waktu fleksibel', 'BBM included'], waMessage: 'layanan Daily Rent Service' },
  { icon: Plane, title: 'Transfer In Out', description: 'Antar jemput bandara, stasiun, terminal dengan tarif flat. Name board tersedia, free waiting 60 menit.', features: ['Tarif flat', 'Name board', 'Free waiting 60 menit', 'On time'], waMessage: 'layanan Transfer In Out' },
  { icon: Heart, title: 'Wedding Car', description: 'Mobil pengantin premium seperti Alphard, Camry, Fortuner dengan dekorasi dan driver berseragam.', features: ['Alphard/Camry/Fortuner', 'Dekorasi bunga', 'Driver berseragam', 'Dokumentasi'], waMessage: 'layanan Wedding Car' },
  { icon: Map, title: 'Tour Package', description: 'Paket wisata all-in termasuk mobil, guide, BBM, parkir, dan tol. Half day atau full day tersedia.', features: ['All-in package', 'Guide profesional', 'BBM & parkir included', 'Rute fleksibel'], waMessage: 'layanan Tour Package' },
  { icon: Package, title: 'Moving Service', description: 'Layanan pindahan dengan box truck berbagai ukuran, tenaga angkut profesional, dan packing service.', features: ['Box truck', 'Tenaga angkut', 'Packing service', 'Asuransi barang'], waMessage: 'layanan Moving Service' },
  { icon: Truck, title: 'Cargo Service', description: 'Pengiriman barang dan logistik dengan pickup, box, dan truck. Layanan door-to-door tersedia.', features: ['Pickup/Box/Truck', 'Logistik profesional', 'Door to door', 'Tracking realtime'], waMessage: 'layanan Cargo Service' },
];

const ServicesPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-secondary to-dark-gray py-20 md:py-32">
        <div className="container-custom"><PageBreadcrumb items={[{ label: 'Services' }]} /><h1 className="text-3xl md:text-5xl font-heading font-bold text-primary text-center">Layanan Kami</h1></div>
      </section>
      <StatsSection />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8">
            {services.map((service, i) => (
              <div key={service.title} className="bg-card rounded-xl border border-border p-6 md:p-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><service.icon className="w-6 h-6 text-primary" /></div><h3 className="font-heading font-bold text-xl">{service.title}</h3></div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">{service.features.map(f => <div key={f} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />{f}</div>)}</div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Button asChild className="btn-primary"><a href={`https://wa.me/6281227722211?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang ${service.waMessage}. Mohon info lebih lanjut.`)}`} target="_blank" rel="noopener noreferrer">Pesan Sekarang</a></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </Layout>
  );
};

export default ServicesPage;
