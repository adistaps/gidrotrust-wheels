import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faThumbsUp, faShield, faCar } from '@fortawesome/free-solid-svg-icons';

const stats = [
  {
    icon: faUsers,
    value: '15K+',
    label: 'Pelanggan Puas',
  },
  {
    icon: faThumbsUp,
    value: '98%',
    label: 'Kepuasan',
  },
  {
    icon: faShield,
    value: '100%',
    label: 'Terawat',
  },
  {
    icon: faCar,
    value: '20+',
    label: 'Armada',
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal bg-to-top text-center stagger-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <FontAwesomeIcon icon={stat.icon} className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
