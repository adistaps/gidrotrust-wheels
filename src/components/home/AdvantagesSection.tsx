import { RefreshCw, Globe, Settings, Users, GraduationCap, Wallet } from 'lucide-react';

const advantages = [
  {
    icon: RefreshCw,
    title: 'Dua Metode',
    description: 'Pilihan lepas kunci atau dengan driver sesuai kebutuhan.',
  },
  {
    icon: Globe,
    title: 'Network Area',
    description: 'Layanan mencakup Jogja, Solo, Semarang, dan sekitarnya.',
  },
  {
    icon: Settings,
    title: 'Multi Services',
    description: 'Berbagai layanan transportasi dalam satu tempat.',
  },
  {
    icon: Users,
    title: 'Customers First',
    description: 'Kepuasan pelanggan adalah prioritas utama kami.',
  },
  {
    icon: GraduationCap,
    title: 'Experienced Team',
    description: 'Tim profesional berpengalaman sejak 2007.',
  },
  {
    icon: Wallet,
    title: 'Low Cost',
    description: 'Harga kompetitif dengan kualitas terjamin.',
  },
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Mengapa <span className="text-primary">Memilih Kami?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keunggulan yang membuat kami dipercaya ribuan pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`bg-background/5 p-6 rounded-xl backdrop-blur-sm border border-background/10 transition-all duration-300 hover:bg-background/10 animate-fade-in stagger-${index + 1}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
