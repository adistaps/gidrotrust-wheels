import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const WHATSAPP_URL = 'https://wa.me/6282221568423?text=Halo%20Gidrotrust%20Trans,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda.';

const MapSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight uppercase text-white">
            LOKASI KAMI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kunjungi kantor kami atau hubungi untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-card rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.012356545169!2d109.91427181141753!3d-7.352495392628468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700b65f0290947%3A0xe7585da812543cd8!2sGIDRO%20TRUST%20CAR%20RENT!5e0!3m2!1sid!2sid!4v1705642500000!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">Alamat</h3>
                  <p className="text-gray-400">
                    Ngariboyo, Sindupaten, Kertek<br />
                    Wonosobo 56371<br />
                    Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">Telepon/WhatsApp</h3>
                  <a href="tel:082221568423" className="text-gray-400 hover:text-primary transition-colors">
                    082221568423
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Tersedia 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">Jam Operasional</h3>
                  <p className="text-gray-400">
                    Senin - Minggu<br />
                    24 Jam (Termasuk Hari Libur)
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full inline-block text-center"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
