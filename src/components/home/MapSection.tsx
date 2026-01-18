import { MapPin, Phone, Clock } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Kantor <span className="text-primary">Pusat</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kunjungi kantor kami atau hubungi untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8285802844685!2d110.38493491477655!3d-7.805424794375776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5779a3e3c2c7%3A0x5027a76e355e0a0!2sYogyakarta!5e0!3m2!1sen!2sid!4v1642481571076!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Gidrotrust Trans"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Gambir Anom No. 26<br />
                    Pandeyan Umbulharjo<br />
                    Kota Yogyakarta 55161
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Kontak</h3>
                  <p className="text-muted-foreground">
                    Telp: (0274) 4340640<br />
                    WA: +62 812 7772 2211<br />
                    Email: info@gidrotrusttransport.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground">
                    Senin - Minggu<br />
                    24 Jam (Office & WhatsApp)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
