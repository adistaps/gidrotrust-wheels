import Layout from '@/components/layout/Layout';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Users, Briefcase, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const categories = [
  { title: 'City Car', cars: [{ name: 'Daihatsu Sigra', passengers: 6, luggage: 2, trans: 'Manual', prices: { '12jam': 250000, '24jam': 300000, '24jamDriver': 350000, fullday: 400000, halfday: 300000, bulanan: 7500000 } }, { name: 'Suzuki Ignis', passengers: 5, luggage: 2, trans: 'Matic', prices: { '12jam': 300000, '24jam': 350000, '24jamDriver': 400000, fullday: 450000, halfday: 350000, bulanan: 8500000 } }, { name: 'New Agya', passengers: 5, luggage: 2, trans: 'Matic', prices: { '12jam': 250000, '24jam': 300000, '24jamDriver': 350000, fullday: 400000, halfday: 300000, bulanan: 7500000 } }, { name: 'Mazda 2', passengers: 5, luggage: 2, trans: 'Matic', prices: { '12jam': 400000, '24jam': 450000, '24jamDriver': 500000, fullday: 550000, halfday: 400000, bulanan: 10000000 } }] },
  { title: 'Family Car', cars: [{ name: 'Toyota Avanza', passengers: 7, luggage: 2, trans: 'Manual', prices: { '12jam': 300000, '24jam': 350000, '24jamDriver': 400000, fullday: 450000, halfday: 350000, bulanan: 8000000 } }, { name: 'Daihatsu Xenia', passengers: 7, luggage: 2, trans: 'Manual', prices: { '12jam': 280000, '24jam': 330000, '24jamDriver': 380000, fullday: 430000, halfday: 330000, bulanan: 7500000 } }, { name: 'Suzuki Ertiga', passengers: 7, luggage: 2, trans: 'Matic', prices: { '12jam': 350000, '24jam': 400000, '24jamDriver': 450000, fullday: 500000, halfday: 400000, bulanan: 9000000 } }, { name: 'Toyota Innova', passengers: 7, luggage: 3, trans: 'Matic', prices: { '12jam': 450000, '24jam': 500000, '24jamDriver': 550000, fullday: 600000, halfday: 450000, bulanan: 12000000 } }] },
  { title: 'Premium Car', cars: [{ name: 'Toyota Alphard', passengers: 7, luggage: 4, trans: 'Matic', prices: { '12jam': 1500000, '24jam': 1800000, '24jamDriver': 2000000, fullday: 2200000, halfday: 1200000, bulanan: 35000000 } }, { name: 'Toyota Fortuner', passengers: 7, luggage: 3, trans: 'Matic', prices: { '12jam': 800000, '24jam': 900000, '24jamDriver': 1000000, fullday: 1100000, halfday: 700000, bulanan: 20000000 } }, { name: 'Toyota Camry', passengers: 5, luggage: 3, trans: 'Matic', prices: { '12jam': 900000, '24jam': 1000000, '24jamDriver': 1100000, fullday: 1200000, halfday: 800000, bulanan: 22000000 } }, { name: 'Mitsubishi Pajero', passengers: 7, luggage: 3, trans: 'Matic', prices: { '12jam': 850000, '24jam': 950000, '24jamDriver': 1050000, fullday: 1150000, halfday: 750000, bulanan: 21000000 } }] },
];

const formatPrice = (n: number) => `Rp ${n.toLocaleString('id-ID')}`;

const PricePage = () => {
  const [selected, setSelected] = useState<any>(null);
  return (
    <Layout>
      <section className="bg-gradient-to-r from-secondary to-dark-gray py-20 md:py-32">
        <div className="container-custom"><PageBreadcrumb items={[{ label: 'Tarif Mobil' }]} /><h1 className="text-3xl md:text-5xl font-heading font-bold text-primary text-center">Daftar Harga Sewa Mobil</h1><p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">Gidrotrust Transport menyediakan sewa mobil Yogyakarta dengan harga transparan. Berbagai jenis: city car, family, premium, bus.</p></div>
      </section>
      {categories.map(cat => (
        <section key={cat.title} className="section-padding bg-background border-b border-border">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">{cat.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.cars.map(car => (
                <div key={car.name} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
                  <div className="h-40 bg-muted flex items-center justify-center"><img src="/placeholder.svg" alt={car.name} className="h-full w-full object-cover" /></div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold mb-2">{car.name}</h3>
                    <div className="flex gap-3 text-sm text-muted-foreground mb-3"><span className="flex items-center gap-1"><Users className="w-4 h-4" />{car.passengers}</span><span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{car.luggage}</span></div>
                    <p className="text-xl font-bold text-primary mb-4">{formatPrice(car.prices['12jam'])}<span className="text-sm text-muted-foreground font-normal">/12jam</span></p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => setSelected(car)}>Lihat Harga</Button>
                      <Button size="sm" className="btn-primary" asChild><a href={`https://wa.me/6281227722211?text=${encodeURIComponent(`Halo, saya ingin memesan ${car.name}. Mohon info lebih lanjut.`)}`} target="_blank">Pesan</a></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle className="font-heading">{selected?.name}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="flex gap-4 text-sm"><span>👥 {selected.passengers} Orang</span><span>🧳 {selected.luggage} Koper</span><span>⚙️ {selected.trans}</span></div>
              <div className="space-y-2 text-sm">
                <p>⏱️ 12 Jam (dalam kota): <b>{formatPrice(selected.prices['12jam'])}</b></p>
                <p>⏱️ 24 Jam (lepas kunci): <b>{formatPrice(selected.prices['24jam'])}</b></p>
                <p>⏱️ 24 Jam + Driver: <b>{formatPrice(selected.prices['24jamDriver'])}</b></p>
                <p>📅 Fullday Tour (10 jam): <b>{formatPrice(selected.prices.fullday)}</b></p>
                <p>📅 Halfday Tour (5 jam): <b>{formatPrice(selected.prices.halfday)}</b></p>
                <p>🗓️ Bulanan (30 hari): <b>{formatPrice(selected.prices.bulanan)}</b></p>
              </div>
              <div className="text-xs text-muted-foreground space-y-1"><p>✓ AC & Audio</p><p>✓ Asuransi Allrisk</p><p>✓ Terawat & Bersih</p><p>✓ Free Car Seat</p></div>
              <Button className="w-full btn-primary" asChild><a href={`https://wa.me/6281227722211?text=${encodeURIComponent(`Halo, saya ingin memesan ${selected.name}. Mohon info lebih lanjut.`)}`} target="_blank">Pesan Sekarang</a></Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PricePage;
