import Layout from '@/components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCreditCard, faCircleCheck, faTicket } from '@fortawesome/free-solid-svg-icons';

const ReservationPage = () => {
  const steps = [
    {
      id: 1,
      title: "Hubungi Customer Service",
      icon: faPhone,
      content: (
        <div className="space-y-1 text-gray-400 text-sm">
          <p>Phone/WhatsApp: 082221568423</p>
          <p>Email: info@gidrotrusttransport.com</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Transfer Uang Muka (Min 20%)",
      icon: faCreditCard,
      content: (
        <div className="space-y-1 text-gray-400 text-sm">
          <p><span className="font-bold text-gray-300">Bank BCA:</span> 846 531 3133 a.n. PT. Gidrotrust Trans Indonesia</p>
          <p><span className="font-bold text-gray-300">Bank Mandiri:</span> 137 006 665 5503 a.n. PT. Gidrotrust Trans Indonesia</p>
          <p><span className="font-bold text-gray-300">Bank BNI:</span> 370 013 8001</p>
        </div>
      )
    },
    {
      id: 3,
      title: "Konfirmasi Pembayaran",
      icon: faCircleCheck,
      content: (
        <p className="text-gray-400 text-sm">
          Setelah transfer, segera konfirmasi ke petugas agar proses pemesanan dapat dilanjutkan.
        </p>
      )
    },
    {
      id: 4,
      title: "Kode Booking",
      icon: faTicket,
      content: (
        <p className="text-gray-400 text-sm">
          Setelah pembayaran dikonfirmasi, Anda akan menerima kode booking sebagai tanda pemesanan berhasil. Layanan kami siap digunakan sesuai jadwal.
        </p>
      )
    }
  ];

  return (
    <Layout>
      <div className="bg-black min-h-screen">
        <div className="container-custom py-20 md:py-32">
          {/* Unified Page Title Style */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              CARA MUDAH <span className="text-primary">ORDER</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Pesan kendaraan Anda dengan mudah melalui langkah-langkah praktis berikut ini.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-4">
            {/* Steps Container */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="flex gap-6 md:gap-12 relative group reveal bg-to-top">
                  {/* Vertical Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 md:left-7 top-14 bottom-[-48px] w-px bg-white/10 z-0" />
                  )}

                  {/* Icon Circle */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xl shadow-[0_0_20px_rgba(255,193,7,0.3)] ring-4 ring-black">
                      {step.id}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <FontAwesomeIcon icon={step.icon} className="text-primary w-5 h-5" />
                      <h2 className="text-lg md:text-xl font-heading font-bold text-white uppercase tracking-widest">
                        {step.title}
                      </h2>
                    </div>
                    {step.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationPage;
