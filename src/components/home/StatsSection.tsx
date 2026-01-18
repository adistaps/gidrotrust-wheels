import { Users, ThumbsUp, Shield, Car } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '15K+',
    label: 'Pelanggan Puas',
  },
  {
    icon: ThumbsUp,
    value: '98%',
    label: 'Kepuasan',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Terawat',
  },
  {
    icon: Car,
    value: '20+',
    label: 'Armada',
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in stagger-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
