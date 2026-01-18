import Layout from '@/components/layout/Layout';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Phone, CreditCard, CheckCircle, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  { icon: Phone, title: 'Hubungi Customer Service', content: <div className="space-y-2 text-sm text-muted-foreground"><p>Phone: (0274) 4340640</p><p>Simpati: 081-2777-22211</p><p>XL: 081-9037-85511</p><p>Email: info@gidrotrusttransport.com</p><p>WhatsApp: 0852 9299 9937</p></div> },
  { icon: CreditCard, title: 'Transfer Uang Muka (Min 20%)', content: <div className="space-y-2 text-sm text-muted-foreground"><p><b>Bank BCA:</b> 846 531 3133 a.n. PT. Gidrotrust Trans Indonesia</p><p><b>Bank Mandiri:</b> 137 006 665 5503 a.n. PT. Gidrotrust Trans Indonesia</p><p><b>Bank BNI:</b> 370 013 8001</p></div> },
  { icon: CheckCircle, title: 'Konfirmasi Pembayaran', content: <p className="text-sm text-muted-foreground">Setelah transfer, segera konfirmasi ke petugas agar proses pemesanan dapat dilanjutkan.</p> },
  { icon: Ticket, title: 'Kode Booking', content: <p className="text-sm text-muted-foreground">Setelah pembayaran dikonfirmasi, Anda akan menerima kode booking sebagai tanda pemesanan berhasil. Layanan kami siap digunakan sesuai jadwal.</p> },
];

const ReservationPage = () => (
  <Layout>
    <section className="bg-gradient-to-r from-secondary to-dark-gray py-20 md:py-32">
      <div className="container-custom"><PageBreadcrumb items={[{ label: 'Reservasi Layanan' }]} /><div className="bg-primary/20 border border-primary rounded-xl p-6 md:p-8 text-center mb-8"><h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">EARLY BOOKING 15% OFF</h2><p className="text-secondary-foreground mb-4">Booking Lebih Cepat, Harga Makin Hemat</p><Button className="btn-primary" asChild><a href="https://wa.me/6281227722211?text=Halo%20Gidrotrust%20Trans,%20saya%20ingin%20booking%20dengan%20promo%20Early%20Booking." target="_blank">Hubungi & Pesan Sekarang</a></Button></div></div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Cara Mudah Order</h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center"><div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">{i + 1}</div>{i < steps.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}</div>
              <div className="flex-1 bg-card rounded-xl border border-border p-6"><div className="flex items-center gap-3 mb-3"><step.icon className="w-5 h-5 text-primary" /><h3 className="font-heading font-bold">{step.title}</h3></div>{step.content}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12 italic">Hormat Kami, Gidrotrust Transport</p>
      </div>
    </section>
  </Layout>
);

export default ReservationPage;
