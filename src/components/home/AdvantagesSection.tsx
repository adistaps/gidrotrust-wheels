import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRotate,
  faGlobe,
  faGears,
  faUsers,
  faGraduationCap,
  faWallet
} from '@fortawesome/free-solid-svg-icons';

const advantages = [
  {
    icon: faRotate,
    title: 'Dua Metode',
    description: 'Pilihan lepas kunci atau dengan driver sesuai kebutuhan.',
  },
  {
    icon: faGlobe,
    title: 'Network Area',
    description: 'Layanan mencakup Jogja, Solo, Semarang, dan sekitarnya.',
  },
  {
    icon: faGears,
    title: 'Multi Services',
    description: 'Berbagai layanan transportasi dalam satu tempat.',
  },
  {
    icon: faUsers,
    title: 'Customers First',
    description: 'Kepuasan pelanggan adalah prioritas utama kami.',
  },
  {
    icon: faGraduationCap,
    title: 'Experienced Team',
    description: 'Tim profesional berpengalaman sejak 2007.',
  },
  {
    icon: faWallet,
    title: 'Low Cost',
    description: 'Harga kompetitif dengan kualitas terjamin.',
  },
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-10 reveal bg-to-top">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold mb-4 tracking-tight uppercase">
            KENAPA GIDROTRUST
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Keunggulan yang membuat kami dipercaya ribuan pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={cn(
                "reveal bg-card p-6 rounded-xl border border-border transition-all duration-300 hover:border-primary/40",
                `stagger-${(index % 3) + 1}`,
                "bg-to-top"
              )}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={advantage.icon} className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-white">{advantage.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
