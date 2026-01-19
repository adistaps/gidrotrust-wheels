import Layout from '@/components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
        {/* Unified Page Title Style */}
        <section className="pt-20 md:pt-32 pb-12 px-4 text-center">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              CONTACT US
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Hubungi kami kapan saja, layanan kami tersedia 24 jam untuk membantu perjalanan Anda.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-4 bg-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Map Column */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[400px] md:h-[600px] relative group reveal">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.012356545169!2d109.91427181141753!3d-7.352495392628468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700b65f0290947%3A0xe7585da812543cd8!2sGIDRO%20TRUST%20CAR%20RENT!5e0!3m2!1sid!2sid!4v1705642500000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gidrotrust Location"
                ></iframe>
              </div>

              {/* Info Column */}
              <div className="space-y-8">
                {/* Phone Card */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm flex gap-6 hover:bg-zinc-900/80 hover:border-primary/30 transition-all duration-300 reveal bg-to-top">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-widest">Phone</h2>
                    <div className="space-y-2 text-gray-400 text-sm">
                      <p>Telp/WhatsApp: 082221568423</p>
                    </div>
                  </div>
                </div>

                {/* Office Card */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm flex gap-6 hover:bg-zinc-900/80 hover:border-primary/30 transition-all duration-300 reveal bg-to-top stagger-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-widest">Office 24 Hours</h2>
                    <div className="space-y-2 text-gray-400 text-sm">
                      <p>Monday to Sunday</p>
                      <p>Buka 24 Jam</p>
                    </div>
                  </div>
                </div>

                {/* Visit Card */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm flex gap-6 hover:bg-zinc-900/80 hover:border-primary/30 transition-all duration-300 reveal bg-to-top stagger-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-widest">Visit</h2>
                    <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
                      <p>Ngariboyo, Sindupaten,</p>
                      <p>Kecamatan Kertek, Wonosobo</p>
                      <p>Jawa Tengah 56371</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;