import Layout from '@/components/layout/Layout';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Phone, Clock, MapPin } from 'lucide-react';

const ContactPage = () => (
  <Layout>
    <section className="bg-gradient-to-r from-secondary to-dark-gray py-20 md:py-32">
      <div className="container-custom"><PageBreadcrumb items={[{ label: 'Contact Us' }]} /><h1 className="text-3xl md:text-5xl font-heading font-bold text-primary text-center">Contact Us</h1><p className="text-center text-muted-foreground mt-4">Hubungi kami kapan saja, layanan tersedia 24 jam</p></div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[500px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8285802844685!2d110.38493491477655!3d-7.805424794375776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5779a3e3c2c7%3A0x5027a76e355e0a0!2sYogyakarta!5e0!3m2!1sen!2sid!4v1642481571076!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Lokasi Gidrotrust Trans" />
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Phone className="w-6 h-6 text-primary" /></div><div><h3 className="font-heading font-bold text-lg mb-2">Phone</h3><p className="text-muted-foreground text-sm">Telp: (0274) 4340640<br/>Tsel/WA: 081227722211<br/>Tsel/WA: 0852 9299 9937<br/>XL: 081903785511</p></div></div></div>
            <div className="bg-card p-6 rounded-xl border border-border"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Clock className="w-6 h-6 text-primary" /></div><div><h3 className="font-heading font-bold text-lg mb-2">Office 24 Hours</h3><p className="text-muted-foreground text-sm">Monday to Sunday<br/>Buka 24 Jam</p></div></div></div>
            <div className="bg-card p-6 rounded-xl border border-border"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><MapPin className="w-6 h-6 text-primary" /></div><div><h3 className="font-heading font-bold text-lg mb-2">Visit</h3><p className="text-muted-foreground text-sm">Head Office: Jl. Gambir Anom No. 26<br/>Pandeyan Umbulharjo<br/>Kota Yogyakarta 55161</p></div></div></div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
