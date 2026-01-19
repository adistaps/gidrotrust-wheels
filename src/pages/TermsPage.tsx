import Layout from '@/components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleInfo, faShieldHalved, faUserTie } from '@fortawesome/free-solid-svg-icons';

const TermsPage = () => {
  const sections = [
    {
      title: "Persyaratan Umum",
      icon: faCircleInfo,
      items: [
        "Memiliki KTP/Identitas diri yang masih berlaku.",
        "Memiliki SIM A yang masih berlaku (untuk sewa lepas kunci).",
        "Menjaminkan sepeda motor + STNK asli (untuk sewa lepas kunci).",
        "Bersedia difoto bersama kendaraan saat serah terima.",
        "Pemakaian kendaraan hanya untuk wilayah yang disepakati."
      ]
    },
    {
      title: "Ketentuan Driver",
      icon: faUserTie,
      items: [
        "Waktu kerja driver adalah 12-24 jam sesuai paket yang dipilih.",
        "Uang makan driver ditanggung oleh penyewa (atau sesuai kesepakatan).",
        "Akomodasi driver jika keluar kota ditanggung oleh penyewa.",
        "Driver berhak menolak rute yang membahayakan keselamatan.",
        "Overtime driver dihitung per jam sesuai ketentuan."
      ]
    },
    {
      title: "Kebijakan & Asuransi",
      icon: faShieldHalved,
      items: [
        "Kendaraan sudah dilengkapi asuransi standar.",
        "Kerusakan akibat kelalaian penyewa menjadi tanggung jawab penyewa.",
        "Kehilangan barang di dalam kendaraan bukan tanggung jawab kami.",
        "Dilarang membawa barang berbahaya atau ilegal ke dalam unit.",
        "Pembatalan sewa pada hari H akan dikenakan biaya pembatalan."
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black">
        <div className="container-custom py-20 md:py-32">
          {/* Unified Page Title Style */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              TERMS <span className="text-primary">& CONDITIONS</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Pahami syarat dan ketentuan layanan kami untuk kenyamanan dan keamanan perjalanan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="reveal bg-zinc-900/50 p-8 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-zinc-900/80 transition-all duration-300 bg-to-top"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={section.icon} className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6 uppercase tracking-widest">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-zinc-900/30 rounded-3xl border border-white/10 text-center reveal">
            <p className="text-gray-500 text-sm">
              Dengan menggunakan layanan Gidrotrust Trans, Anda dianggap telah menyetujui seluruh syarat dan ketentuan di atas.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;