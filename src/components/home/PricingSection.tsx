import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: 'Reguler',
    price: 'Rp 250K',
    unit: '/hari',
    description: 'Untuk kebutuhan harian standar',
    features: [
      'Mobil city car / MPV',
      'AC & Audio',
      'Asuransi dasar',
      'Bebas jarak tempuh',
    ],
    popular: false,
  },
  {
    name: 'VIP',
    price: 'Rp 400K',
    unit: '/jam',
    description: 'Layanan premium dengan driver',
    features: [
      'Mobil premium (Alphard/Fortuner)',
      'Driver profesional',
      'Termasuk BBM',
      'Asuransi Allrisk',
      'Free waiting time 1 jam',
    ],
    popular: true,
  },
  {
    name: 'Economy',
    price: 'Rp 75K',
    unit: '/jam',
    description: 'Untuk pemakaian singkat',
    features: [
      'Mobil city car',
      'AC & Audio',
      'Minimum 4 jam',
      'Bebas jarak tempuh',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-background text-white">
      <div className="container-custom">
        <div className="text-center mb-10 reveal bg-to-top">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight uppercase">
            PILIH PAKET SEWA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Harga transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'reveal bg-card rounded-xl border border-border p-6 lg:p-8 transition-all duration-300',
                plan.popular ? 'border-primary ring-1 ring-primary/20' : 'card-hover',
                `stagger-${(index % 3) + 1}`,
                "bg-to-top"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest">
                  <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                  Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-xs">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  'w-full',
                  plan.popular ? 'btn-primary' : 'btn-outline'
                )}
              >
                <Link to="/price">Selengkapnya</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
